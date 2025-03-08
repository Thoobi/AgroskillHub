import { Outlet } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const withoutFooter = ["/join-waitlist", "/signup"];
  return (
    <div>
      <Navbar />
      <Outlet />
      {!withoutFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
