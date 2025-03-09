// import Journey from "../components/shared/Journey";
import Courses from "../components/shared/LandingPage/Courses";
import Unlock from "../components/shared/LandingPage/Unlock";
import Header from "../components/shared/LandingPage/Header";
import FAQ from "../components/shared/LandingPage/FAQ";
import CTA from "../components/shared/LandingPage/CTA";
import Testimonials from "../components/shared/LandingPage/Testimonial";
import Words from "../components/shared/LandingPage/Words";
import WordsTwo from "../components/shared/LandingPage/WordsTwo";

const LandingPages = () => {
  return (
    <div className="pt-16">
      <Header />
      {/* <Journey /> */}
      <Courses />
      <Unlock />
      <Words />
      <WordsTwo />
      <Testimonials />
      <CTA />
      <FAQ />
    </div>
  );
};

export default LandingPages;
