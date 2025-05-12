import { Link } from "react-router-dom";
import { useEffect } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { RxMagicWand } from "react-icons/rx";
import { Toaster } from "sonner";
import Modal from "../components/ui/Modal";
import { useResume } from "../hooks/useResume";
import ResumeHome from "../components/shared/Resume/ResumeHome";

const CReview = () => {
  const {
    isLoading,
    modalOpen,
    handleFileChange,
    fileName,
    onChange,
    handleForm,
    setTermsAccepted,
    dataInserted,
    cvData,
    clear,
  } = useResume();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(cvData);

  const handleCheckboxChange = () => {
    setTermsAccepted(true);
  };

  return (
    <section className="bg-gray-100 w-full h-full py-12 max-lg:py-16 font-jarkata flex flex-col gap-5 justify-center items-center">
      <Toaster richColors expand position="top-right" />
      {modalOpen && <Modal />}
      {dataInserted && clear === false ? (
        <ResumeHome />
      ) : (
        <div className="py-8">
          <div className="mx-auto px-4 max-w-7xl max-lg:w-full flex flex-col gap-2">
            <h1 className="text-5xl font-medium text-center">CV Review</h1>
            <p className="text-center text-xl">
              Get instant feedback on your CV
            </p>
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
                  placeholder="Job title"
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
                  className="py-2 px-3 border border-gray-300 rounded-md w-[400px] outline-none max-lg:w-full resize-none"
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
                      <MdOutlineAttachFile
                        size={28}
                        className="font-extralight"
                      />
                      <span>{fileName || "Upload your CV"}</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-8 mt-5">
                <div className="flex gap-2">
                  <input type="checkbox" onClick={handleCheckboxChange} />
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
                <button
                  disabled={isLoading}
                  className="bg-green-600 py-3 rounded-lg text-white text-lg hover:bg-green-500"
                >
                  {isLoading ? (
                    <span>Reviewing...</span>
                  ) : (
                    <span className="flex w-full justify-center items-center">
                      Review
                      <RxMagicWand size={25} />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CReview;
