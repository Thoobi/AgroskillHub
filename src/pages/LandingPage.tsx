// import Journey from "../components/shared/Journey";
import Courses from "../components/shared/Courses";
import Unlock from "../components/shared/Unlock";
import Header from "../components/shared/Header";
import FAQ from "../components/shared/FAQ";
import CTA from "../components/shared/CTA";
import Testimonials from "../components/shared/Testimonial";
import Words from "../components/shared/Words";
import WordsTwo from "../components/shared/WordsTwo";

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
