import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { RxMagicWand } from "react-icons/rx";
import { toast, Toaster } from "sonner";

interface FormData {
  Name: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  file: File | string;
}

const CReview = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    file: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
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
    setFormData((data) => ({ ...data, file: selectedFile }));
    toast.success("File uploaded successfully");
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log("loading....");
    // setFormData({
    //   Name: formData.Name,
    //   email: formData.email,
    //   phoneNumber: formData.phoneNumber,
    //   jobTitle: formData.jobTitle,
    //   file: file?.name || "",
    // });
    console.log(formData);

    const response = await fetch("https://cv-review.onrender.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log(response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // For HTML response
    const htmlContent = await response.text();
    console.log("HTML Response:", htmlContent);
    console.log("loadings....");

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Example: Extract specific content from the HTML
    const message = doc.querySelector(".message")?.textContent;
    const status = doc.querySelector(".status")?.textContent;

    console.log("Parsed HTML:", {
      message,
      status,
      fullHtml: htmlContent,
    });
  };

  return (
    <section className="bg-gray-100 w-full h-full py-20 pt-28 font-jarkata">
      <Toaster richColors expand position="top-right" />
      <div className="mx-auto px-4 max-w-7xl">
        <h1 className="text-5xl font-medium text-center">CV Review</h1>
        <p></p>
      </div>
      <div className="py-5 flex justify-center items-center">
        <form action="" className="flex flex-col gap-5" onSubmit={handleForm}>
          <div className="flex flex-col">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              onChange={onChange}
              className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={onChange}
              className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              onChange={onChange}
              className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Upload your CV/Resume</label>
            <div className="py-10 border-gray-300 border rounded-md w-[400px] flex justify-center items-center gap-2">
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
        </form>
      </div>
    </section>
  );
};

export default CReview;
