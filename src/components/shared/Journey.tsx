import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const Journey = () => {
  return (
    <section className="bg-primarywhite text-primaryblack font-roboto px-16">
      <div className="mt-16">
        <div>
          <h3 className="text-start text-base">Start</h3>
          <div>
            <h1>Your Journey with AgroSkill Hub Begins Here</h1>
            <p>
              AgroSkill Hub is designed to empower you with essential skills
              through localized, multilingual content. Follow these simple steps
              to get started on your path to gaining practical skills.
            </p>
            <Link to="/" className="text-buttonprimary flex items-center gap-2">
              Explore our courses
              <MdKeyboardArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
