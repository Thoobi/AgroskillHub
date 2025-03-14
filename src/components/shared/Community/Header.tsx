const Header = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/assets/community-header-img.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
      className="font-roboto text-white flex flex-col items-start justify-center gap-8 max-lg:w-full max-lg:px-5"
    >
      <div className="px-16 flex flex-col items-start justify-center gap-8 max-lg:w-full max-lg:px-5 max-lg:gap-4">
        <div className="w-[560px] max-lg:w-full">
          <h1 className="text-[3.5rem]/[72px] font-bold max-lg:text-4xl">
            Connect With Fellow Learners in Your Community
          </h1>
        </div>
        <p className="text-xl w-[560px] max-lg:w-full font-normal max-lg:text-base">
          Get peer support and build your professional network.
        </p>
        <div className="flex gap-4 max-lg:flex-col">
          <button className="bg-buttonprimary text-white rounded-[4px] h-[51px] w-[194px] max-lg:h-12 text-lg font-medium max-lg:w-[170px]">
            Join Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
