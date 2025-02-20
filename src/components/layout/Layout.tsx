import { Outlet } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
