import foodprodshort from "../../../foodprodshort.json";
import { MdOutlinePlayLesson } from "react-icons/md";
// import { RiUserVoiceLine } from "react-icons/ri";
import { IoStar } from "react-icons/io5";

interface FoodProd {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  lessons: number;
  students: number;
}

const FoodProduction = () => {
  return (
    <div className="flex flex-row max-lg:flex-col gap-6 w-full max-lg:px-5 h-full">
      {foodprodshort.map((item: FoodProd) => (
        <div
          key={item.id}
          className="w-[302px] rounded-2xl border-[1px] border-[#F6F6F6] pb-6"
        >
          <div className="h-[220px] w-full rounded-t-2xl">
            <img
              src={item.image}
              alt=""
              className="w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-full px-6 py-4 font-jarkata flex flex-col gap-6">
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MdOutlinePlayLesson />
                  <h6 className="text-sm">{item.lessons} lessons</h6>
                </span>
                <span className="flex gap-2 items-center">
                  <IoStar />
                  <h6 className="text-[#1E2B33] text-base font-bold">
                    {item.rating}
                  </h6>
                </span>
              </div>
            </div>
            <div className="w-full px-6">
              <button className="h-11 w-[254px] bg-green-700 rounded-2xl text-base font-bold text-white">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodProduction;
