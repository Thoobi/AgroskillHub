import { useState } from "react";
import FoodProduction from "../LandingPage/FoodProduction";
import { HiOutlineArrowRight } from "react-icons/hi2";

const courseHeader = [
  {
    title: "Food Production",
    content: <FoodProduction />,
  },
  {
    title: "Web3",
    content: <FoodProduction />,
  },
  {
    title: "Digital Marketing",
    content: <FoodProduction />,
  },
];
const Courses = () => {
  const [activetab, setActivetab] = useState("Food Production");
  return (
    <section className="w-full bg-primarywhite font-roboto px-16 py-20 max-lg:w-full max-lg:px-5">
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center w-full items-center gap-4">
          <h1 className="text-5xl/[57.6px] font-bold max-lg:text-4xl">
            Our Courses
          </h1>
          <span className="text-4xl/[43.2px] font-semibold max-lg:text-4xl">
            Best selling courses
          </span>
        </div>
        <div
          className={`flex max-lg:flex-col max-lg:w-[265px] max-lg:h-[200px] max-lg:px-2 w-[740px] h-[77px] items-center rounded-full max-lg:rounded-[40px] gap-2 bg-[#EEF8FF] p-2`}
        >
          {courseHeader.map((course, index) => (
            <>
              <button
                key={index}
                className={`${
                  activetab === course.title
                    ? "w-[246px] h-[61px] bg-[#D5F6D7] rounded-full text-xl font-medium flex justify-center items-center"
                    : "w-[246px] h-[61px] flex justify-center items-center text-xl font-regular"
                }`}
                onClick={() => setActivetab(course.title)}
              >
                {course.title}
              </button>
            </>
          ))}
        </div>
        <div>
          {courseHeader.map((course, index) => (
            <>
              {activetab === course.title && (
                <div key={index} className="mt-8">
                  {course.content}
                </div>
              )}
            </>
          ))}
        </div>
        <div>
          <button className="flex items-center justify-center gap-4 bg-green-700 h-[72px] w-[307px] text-2xl font-bold text-white rounded-2xl">
            View all courses
            <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
