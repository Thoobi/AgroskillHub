import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "/assets/logo.svg";
const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Community Hub",
    href: "/community",
  },
  {
    name: "About Us",
    // href: "/about",
  },
];
const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || ""
  );
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleSignUp = () => {
    navigate("/join-waitlist");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.scrollTo(0, 0);
    localStorage.setItem("activeTab", location.pathname);
  }, [isOpen, activeTab, location.pathname]);

  return (
    <nav className="bg-primaryblack text-primarywhite flex justify-between items-center py-3 px-16 border-b border-primaryblack font-roboto max-lg:px-5 fixed w-full">
      <div className="w-[200px] max-lg:w-[150px] max-lg:h-[45px] flex items-center ">
        <Link to="/">
          <img src={logo} alt="" className="w-[full] h-[full]" />
        </Link>
      </div>
      <div className="flex items-center gap-8 text-base max-lg:hidden">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href ? link.href : ""}
            onClick={() => {
              setActiveTab(link.href || "");
            }}
            className={`${
              activeTab === link.href
                ? "text-white border-b-2 hover:border-white"
                : "text-primarywhite"
            } hover:border-b-2 hover:border-white`}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex gap-4">
          <button className="border-[1px] border-buttonprimary h-[43px] w-[85px] text-lg font-medium">
            Login
          </button>
          <button
            className="bg-buttonprimary h-[43px] w-[103px] text-lg text-white font-medium"
            onClick={handleSignUp}
          >
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
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href ? link.href : ""}
                  onClick={() => {
                    setActiveTab(link.href || "");
                    setIsOpen(false);
                  }}
                  className={`${
                    activeTab === link.href
                      ? "text-white border-b-2 hover:border-white"
                      : "text-primarywhite"
                  } hover:border-b-2 hover:border-white`}
                >
                  {link.name}
                </Link>
              ))}
              <li className="w-full">
                <button className="border-[1px] border-buttonprimary h-[43px] w-full text-lg font-medium">
                  Login
                </button>
              </li>
              <li className="w-full">
                <button
                  className="bg-buttonprimary h-[43px] w-full text-lg text-white font-medium"
                  onClick={() => {
                    handleSignUp();
                    setIsOpen(false);
                  }}
                >
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
