import community from "/assets/community.jpg";

const CTA = () => {
  return (
    <section className="px-16 py-28 max-lg:py-12 bg-black text-white font-jarkata w-full max-lg:px-5">
      <div className="w-full flex max-lg:flex-col items-center justify-between max-lg:gap-12">
        <div className="flex flex-col gap-8 items-start w-[616px] max-lg:w-full">
          <span className="flex flex-col gap-6">
            <h1 className="font-bold text-5xl/[3.5rem]">
              Join the Agroskill Community
            </h1>
            <p className="text-lg">
              Join AgroSkill Hub and unlock your potential with localized,
              engaging learning experiences tailored for your needs. Sign up
              today to connect with peers and gain practical skills that empower
              your future.
            </p>
          </span>
          <button className="bg-buttonprimary rounded-2xl h-[54px] w-[409px] max-lg:w-full text-xl font-bold">
            Sign Up
          </button>
        </div>
        <div className="h-full max-lg:w-full">
          <img src={community} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
