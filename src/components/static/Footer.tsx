import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-16 py-20 w-full flex flex-col gap-8 font-jarkata max-lg:px-5 max-lg:py-12">
      <div className="p-12 bg-black text-white flex gap-32 w-full max-lg:flex-col max-lg:p-5">
        <div className="flex gap-11 w-full max-lg:flex-col">
          <div className="w-[125px]">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-[125px] max-lg:w-full">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul>
              <li className="py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">
                <Link to={"mailto:mastaskillzhq@gmail.com"}>Contact us</Link>
              </li>
              <li className="py-2 text-sm">FAQS</li>
              <li className="py-2 text-sm">Blogs</li>
              <li className="py-2 text-sm">Support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-[125px]">
            <h4 className="text-base font-semibold">Resources</h4>
            <ul>
              <li className="py-2 text-sm">Webinars</li>
              <li className="py-2 text-sm">Case Studies</li>
              <li className="py-2 text-sm">Ebooks</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">News</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-[125px]">
            <h4 className="text-base font-semibold">Stay connected</h4>
            <ul>
              <li className="py-2 text-sm">Follow Us</li>
              <li className="py-2 text-sm">Join Us</li>
              <li className="py-2 text-sm">Feedback</li>
              <li className="py-2 text-sm">Newsletter</li>
              <li className="py-2 text-sm">Updates</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[400px] max-lg:w-full">
          <span className="flex flex-col gap-4">
            <h4 className="text-base font-semibold">Subscribe</h4>
            <p className="text-base">
              Join our newsletter to stay updated on features and releases.
            </p>
          </span>
          <div className="flex flex-col gap-3">
            <span className="flex gap-4 max-lg:flex-col">
              <input
                type="text"
                placeholder="Enter your email"
                className="focus:outline-none border-[1px] border-black text-black h-12 w-[265px] max-lg:w-full p-3 rounded-2xl"
              />
              <button className="h-12 w-[119px] max-lg:w-full border-[1px] border-buttonprimary rounded-2xl">
                Subscribe
              </button>
            </span>
            <p className="text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between max-lg:flex-col-reverse max-lg:gap-6">
        <div className="flex justify-start w-full gap-6 max-lg:flex-col-reverse">
          <p className="text-sm">© 2025 Mastaskillz. All Rights Reserved.</p>
          <ul className="flex gap-6 max-lg:flex-c">
            <li className="text-sm underline max-lg:w-full">
              <Link to={"/privacy"}>Privacy Policy</Link>{" "}
            </li>
            <li className="text-sm underline">
              <Link to={"/terms"}>Terms of Service</Link>
            </li>
            <li className="text-sm underline">Cookie Settings</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3 text-2xl">
            <li>
              <IoLogoFacebook />
            </li>
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <IoLogoLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
