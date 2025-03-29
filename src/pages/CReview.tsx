import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { RxMagicWand } from "react-icons/rx";
import { toast, Toaster } from "sonner";

interface FormData {
  jobDescription: string;
  jobTitle: string;
  cv: File | string;
}

const CReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState<FormData>({
    jobDescription: "",
    jobTitle: "",
    cv: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log(file);
    if (!selectedFile) {
      return;
    }
    if (selectedFile.type !== "application/pdf") {
      toast.error("Please upload a pdf file");
      e.target.value = "";
      return;
    }
    console.log(selectedFile);
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setFormData((data) => ({ ...data, cv: selectedFile }));
    toast.success("File uploaded successfully");
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log("loading....");
    if (
      formData.jobTitle === "" ||
      formData.cv === "" ||
      formData.jobDescription === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }

    console.log(formData);
    console.log("Loading....");
    const response = await fetch("https://cv-review.onrender.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify(formData),
    });
    response.json();
    console.log(response);
    console.log(formData);
    if (!response.ok) {
      console.log(response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    toast.success("CV uploaded successfully");
  };

  return (
    <section className="bg-gray-100 w-full h-screen py-20 pt-28 font-jarkata flex flex-col gap-5 justify-center items-center">
      <Toaster richColors expand position="top-right" />
      <div className="mx-auto px-4 max-w-7xl max-lg:w-full flex flex-col gap-2">
        <h1 className="text-5xl font-medium text-center">CV Review</h1>
        <p className="text-center text-xl">Get instant feedback on your CV</p>
      </div>
      <div className="py-5 flex justify-center items-center max-lg:w-full">
        <form
          action=""
          className="flex flex-col gap-5 max-lg:w-full max-lg:px-5"
          onSubmit={handleForm}
        >
          <div className="flex flex-col">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              name="jobTitle"
              type="text"
              id="jobTitle"
              onChange={onChange}
              className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none max-lg:w-full "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              name="jobDescription"
              onChange={onChange}
              rows={5}
              cols={5}
              placeholder="Write a description of the job"
              className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none max-lg:w-full "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Upload your CV/Resume</label>
            <div className="py-10 border-gray-300 border rounded-md w-[400px] flex justify-center items-center gap-2 max-lg:w-full">
              <input
                type="file"
                accept="pdf"
                name="job title"
                id="files"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="files">
                <div className="flex items-center gap-2 py-2 cursor-pointer">
                  <MdOutlineAttachFile size={28} className="font-extralight" />
                  <span>{fileName || "Upload your CV"}</span>
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-5">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>
                Agree to our{" "}
                <Link to="/terms" className="text-blue-600 underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to={"/privacy"} className="text-blue-600 underline">
                  Privacy Policy
                </Link>
              </span>
            </div>
            <button className="bg-green-600 py-3 rounded-lg text-white text-lg hover:bg-green-500">
              Review
              <RxMagicWand size={24} className="inline-block ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CReview;
