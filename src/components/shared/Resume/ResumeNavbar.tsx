import { useResume } from "../../../hooks/useResume";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const ResumeNavbar = () => {
  const navigate = useNavigate();
  const { setActiveTab, activeTab, ResumeNav, cvData, handleClear } =
    useResume();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkData = () => {
      const reviewData = localStorage.getItem("reviewData");
      if (!reviewData || !cvData || cvData.length === 0) {
        navigate("/review");
      }
    };

    checkData();
  }, [cvData, navigate]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-4 md:px-16 py-3 space-y-4 md:space-y-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h3 className="text-2xl md:text-4xl font-semibold">Resume Analysis</h3>
        <button
          className="md:hidden bg-gray-600 p-2 rounded-md text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu className="text-xl" />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:items-center md:justify-end md:gap-5`}
      >
        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 bg-white/90 p-2 md:px-3 md:py-2 rounded-lg md:rounded-full w-full md:w-auto">
          {ResumeNav.map((item) => (
            <button
              key={item.id}
              className={`flex items-center justify-center cursor-pointer px-3 py-2 rounded-full w-full md:w-auto ${
                activeTab === item.id
                  ? "bg-gray-600 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
            >
              <span className="text-sm md:text-base font-medium">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 md:gap-5 w-full md:w-auto">
          <button className="bg-gray-600 text-sm md:text-base text-white rounded-md px-3 py-2 w-full md:w-auto hover:bg-gray-700">
            Download
          </button>
          <button
            className="bg-gray-600 text-sm md:text-base text-white rounded-md px-3 py-2 w-full md:w-auto hover:bg-gray-700"
            onClick={() => {
              handleClear();
              setIsMenuOpen(false);
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeNavbar;
