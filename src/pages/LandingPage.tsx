import Journey from "../components/shared/Journey";
import Courses from "../components/shared/Courses";
import Unlock from "../components/shared/Unlock";
import Header from "../components/shared/Header";
import FAQ from "../components/shared/FAQ";

const LandingPages = () => {
  return (
    <div>
      <Header />
      <Journey />
      <Courses />
      <Unlock />
      <FAQ />
    </div>
  );
};

export default LandingPages;
