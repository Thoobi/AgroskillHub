const jargons = [
  {
    image: "../../src/assets/Vector.svg",
    title: "Receive Certification Upon Completion",
    description: "Earn your certificate to showcase your new skills.",
  },
  {
    image: "../../src/assets/Vector.svg",
    title: "Track Your Progress and Achieve Certification",
    description:
      "Stay motivated as you complete interactive quizzes and receive your certification.",
  },
  {
    image: "../../src/assets/Vector.svg",
    title: "Join a Community of Learners and Mentors",
    description: "Engage with peers and experts through our community forums.",
  },
];
export default function Unlock() {
  return (
    <section className="py-[112px] px-16 bg-[#F6FBFF] font-roboto flex flex-col gap-20 w-full">
      <div className="flex gap-20 items-center justify-center w-full">
        <span className="w-[616px]">
          <h2 className="text-[2.49rem] text-start font-bold">
            Unlock Exciting Possibilities: Start Your Educational Adventure with
            AgroSkill Hub Now!
          </h2>
        </span>
        <span className="w-[616px]">
          <p className="text-xl font-normal ">
            At AgroSkill Hub, we empower you to gain practical skills through
            our localized content. Access a wide range of courses designed to
            meet your needs, regardless of your background. Join our community
            and transform your learning experience into a journey of growth and
            opportunity.
          </p>
        </span>
      </div>
      <div className="flex w-full justify-center gap-12">
        {jargons.map((item, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div>
              <img src={item.image} alt="" />
            </div>
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="text-base font-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
