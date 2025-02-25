import jinx from "../../assets/jinx.jpg";

const WordsTwo = () => {
  return (
    <section className="px-16 py-28 font-jarkata w-full max-lg:px-5 max-lg:py-12">
      <div className="flex gap-20 max-lg:flex-col  flex-row-reverse items-start justify-start ">
        <div className="w-[616px] max-lg:w-full  flex flex-col gap-8 justify-start items-start">
          <span className="flex flex-col gap-6 max-lg:gap-5">
            <h2 className="text-4xl max-lg:text-[32px] font-bold">
              Learn and Earn: Apply Your Knowledge After Every Lesson for
              Real-World Success!
            </h2>
            <p className="text-lg max-lg:text-base">
              Discover the power of learning with practice! After each lesson,
              you can apply your newfound knowledge to real-world scenarios,
              ensuring that your skills translate into tangible success. Stay
              engaged and motivated as you track your progress and see how your
              learning leads to real-life achievements!
            </p>
          </span>
          <div className="flex flex-row gap-6 max-lg:flex-col">
            <span className="flex flex-col gap-4">
              <h4 className="text-5xl font-bold">90%</h4>
              <p className="text-base">
                Enhance knowledge retention with real-world applications.
              </p>
            </span>
            <span className="flex flex-col gap-4">
              <h4 className="text-5xl font-bold">Track</h4>
              <p className="text-base">
                Monitor your alearning journey and celebrate achievements.
              </p>
            </span>
          </div>
          <button className="w-[409px] max-lg:w-full h-[54px] bg-buttonprimary text-white font-bold text-xl rounded-lg">
            Start Learning
          </button>
        </div>
        <div>
          <img
            src={jinx}
            alt="sm
            iley girl"
          />
        </div>
      </div>
    </section>
  );
};

export default WordsTwo;
