import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="bg-primarywhite text-primaryblack flex justify-between items-center py-3 px-16 border-b border-primaryblack font-roboto">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex items-center gap-8 text-base">
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>Courses</li>
          <li>Community Hub</li>
          <li>About Us</li>
        </ul>
        <div className="flex gap-4">
          <button className="border-[1px] border-buttonprimary h-[43px] w-[85px] text-lg font-medium">
            Login
          </button>
          <button className="bg-buttonprimary h-[43px] w-[103px] text-lg text-white font-medium">
            Sign Up
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <button>
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
