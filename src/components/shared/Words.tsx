import smiley from "/assets/smileygirl.jpg";

const Words = () => {
  return (
    <section className="px-16 py-28 font-jarkata w-full max-lg:px-5 max-lg:py-12">
      <div className="flex gap-20 max-lg:flex-col items-start justify-start ">
        <div className="w-[616px] max-lg:w-full flex flex-col gap-8 justify-start items-start">
          <span className="flex flex-col gap-6 max-lg:gap-5">
            <h2 className="text-4xl max-lg:text-[32px] font-bold">
              Empowering Learners Everywhere with Multilingual Content for a
              Brighter Future
            </h2>
            <p className="text-lg max-lg:text-base">
              Our platform breaks down language barriers, providing accessible
              learning resources in local languages. With engaging content
              tailored to diverse communities, we ensure everyone can gain the
              skills they need.
            </p>
          </span>
          <div className="flex flex-row gap-6 max-lg:flex-col">
            <span className="flex flex-col gap-4">
              <h4 className="text-xl font-bold">Localized Learning</h4>
              <p className="text-base">
                Access vital information in your language, making education
                relevant and relatable.
              </p>
            </span>
            <span className="flex flex-col gap-4">
              <h4 className="text-xl font-bold">Inclusive Access</h4>
              <p className="text-base">
                Join a community that fosters collaboration and peer learning
                across diverse backgrounds.
              </p>
            </span>
          </div>
          <button className="w-[409px] max-lg:w-full  h-[54px] bg-buttonprimary text-white font-bold text-xl rounded-lg">
            Start Learning
          </button>
        </div>
        <div>
          <img
            src={smiley}
            alt="sm
            iley girl"
          />
        </div>
      </div>
    </section>
  );
};

export default Words;
