import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/assets/logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <nav className="bg-primaryblack text-primarywhite flex justify-between items-center py-3 px-16 border-b border-primaryblack font-roboto max-lg:px-5 fixed w-full">
      <div className="w-[200px] max-lg:w-[150px] max-lg:h-[45px] flex items-center ">
        <Link to="/">
          <img src={logo} alt="" className="w-[full] h-[full]" />
        </Link>
      </div>
      <div className="flex items-center gap-8 text-base max-lg:hidden">
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
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoCloseOutline className="text-3xl" />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>
        {isOpen && (
          <div className="fixed w-full right-0 h-screen py-10 bg-primaryblack text-primarywhite font-jarkata">
            <ul className="flex flex-col gap-8 items-start px-5 justify-center text-lg">
              <li>Home</li>
              <li>Courses</li>
              <li>Community Hub</li>
              <li>About Us</li>
              <li className="w-full">
                <button className="border-[1px] border-buttonprimary h-[43px] w-full text-lg font-medium">
                  Login
                </button>
              </li>
              <li className="w-full">
                <button className="bg-buttonprimary h-[43px] w-full text-lg text-white font-medium">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
