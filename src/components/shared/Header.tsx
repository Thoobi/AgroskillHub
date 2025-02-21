const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url("../../src/assets/bg-header.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="font-roboto text-white flex flex-col items-start justify-center gap-8"
    >
      <div className="px-16 flex flex-col items-start justify-center gap-8">
        <div className="w-[560px]">
          <h1 className="text-[3.5rem]/[72px] font-bold">
            Empower Your Future with Localized Learning
          </h1>
        </div>
        <p className="text-xl w-[560px] font-normal">
          AgroSkill Hub bridges knowledge gaps by providing engaging,
          multilingual educational content tailored for your community. Join us
          in transforming agriculture into a thriving career path for youth and
          women alike.
        </p>
        <div className="flex gap-4">
          <button className="bg-buttonprimary text-white rounded-[4px] h-[51px] w-[194px] text-lg font-medium">
            Sign Up
          </button>
          <button className="border-[1px] border-buttonprimary rounded-[4px] h-[51px] w-[194px] text-lg font-medium">
            learn more
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
