import wip from "/assets/chillguy.png";
const Courses = () => {
  return (
    <section className="max-lg:px-5 h-full w-full bg-primarywhite px-16 py-20 max-lg:py-10 flex justify-center items-center font-jarkata">
      <div className="flex justify-center items-center max-lg:w-full flex-col">
        <div className="w-1/2 mt-20 max-lg:w-full">
          <p className="text-5xl font-bold text-center max-lg:text-3xl max-lg:font-semibold ">
            We are still working on this page. Please check back for updates.
          </p>
        </div>

        <div className="max-lg:w-full">
          <img src={wip} alt="Work in Progress" className=" h-full" />
        </div>
      </div>
    </section>
  );
};

export default Courses;
