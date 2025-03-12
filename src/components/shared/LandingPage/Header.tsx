import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleJoinWaitlist = () => {
    navigate("/join-waitlist");
  };

  return (
    <header
      style={{
        backgroundImage: `url("/assets/bg-header.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="font-roboto text-white flex flex-col items-start justify-center gap-8 max-lg:w-full max-lg:px-5"
    >
      <div className="px-16 flex flex-col items-start justify-center gap-8 max-lg:w-full max-lg:px-5">
        <div className="w-[560px] max-lg:w-full">
          <h1 className="text-[3.5rem]/[72px] font-bold max-lg:text-3xl">
            Empower Your Future with Localized Learning
          </h1>
        </div>
        <p className="text-xl w-[560px] max-lg:w-full font-normal max-lg:text-base">
          Mastaskillz Hub bridges knowledge gaps by providing engaging,
          multilingual educational content tailored for your community. Join us
          in transforming agriculture into a thriving career path for youth and
          women alike.
        </p>
        <div className="flex gap-4 max-lg:flex-col">
          <button
            className="bg-buttonprimary rounded-[4px] h-[51px] max-lg:h-12 w-[194px] text-lg font-medium"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
