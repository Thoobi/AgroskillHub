import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const Journey = () => {
  return (
    <section className="bg-primarywhite text-primaryblack font-roboto px-16">
      <div className="mt-16">
        <div className="text-start w-[380px]">
          <h3 className="text-start text-base">Start</h3>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl/[57.6px] font-bold ">
              Your Journey with AgroSkill Hub Begins Here
            </h1>
            <p className="text-lg/[27px]">
              AgroSkill Hub is designed to empower you with essential skills
              through localized, multilingual content. Follow these simple steps
              to get started on your path to gaining practical skills.
            </p>
          </div>
          <Link to="/" className="flex items-center gap-2 mt-8">
            <span className="text-lg font-medium">Explore our courses</span>
            <MdKeyboardArrowRight className="text-buttonprimary " />
          </Link>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
