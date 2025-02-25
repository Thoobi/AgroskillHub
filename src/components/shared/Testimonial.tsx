import TestimonialCard from "./TestimonialCard";
import profile from "/assets/profile.svg";
const Testimonial = () => {
  return (
    <section className="px-16 py-28 max-lg:py-12 font-jarkata w-full max-lg:px-5">
      <div className="flex flex-col gap-20 items-center">
        <h2 className="text-4xl font-bold text-center ">
          Hear from our Learners
        </h2>
        <div className="w-full overflow-x-scroll flex max-lg:flex-col gap-20 ">
          <TestimonialCard
            name="John Doe"
            location="Lagos, Nigeria"
            image={profile}
            description="This platform transformed my learning experience, making it easier and more enjoyable to grasp complex concepts!"
          />
          <TestimonialCard
            name="John Doe"
            location="Lagos, Nigeria"
            image={profile}
            description="I learned so much from this experience! It truly transformed my understanding and skills in a fun way."
          />
          <TestimonialCard
            name="John Doe"
            location="Lagos, Nigeria"
            image={profile}
            description="This platform revolutionized my studies! It's intuitive, fun, and has significantly improved my learning outcomes."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
