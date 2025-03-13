import wip from "/assets/chillguy.png";
const Courses = () => {
  return (
    <section className="max-lg:px-10 h-screen w-full bg-primarywhite px-16 py-20 flex justify-center items-center font-jarkata">
      <div className="flex justify-center items-center max-lg:w-[300px] max-lg:h-[300px] flex-col">
        <div className="w-1/2 mt-20 max-lg:w-full max-lg:px-2">
          <p className="text-4xl font-bold text-center max-lg:text-3xl ">
            We are still working on this page. Please check back later for
            updates.
          </p>
        </div>
        <img src={wip} alt="Work in Progress" />
      </div>
    </section>
  );
};

export default Courses;
