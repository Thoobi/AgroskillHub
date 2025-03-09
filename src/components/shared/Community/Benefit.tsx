import learn from "/assets/learn.svg";
import smile from "/assets/smile-benefit.svg";
const Benefit = () => {
  return (
    <section className="font-roboto text-black flex flex-col px-28 py-24 text-center justify-center gap-24 max-lg:w-full max-lg:px-5">
      <div className="w-[667px] max-lg:w-full mx-auto">
        <h1 className="text-[3.5rem]/[72px] font-bold max-lg:text-3xl">
          What are the benefits within Our Community
        </h1>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-8 justify-start items-start w-[594px]">
          <div className="flex flex-col gap-2 justify-start items-start pt-[74px] pb-[40px] pl-[87px] pr-[124px] bg-[#2ED335]/35 rounded-tr-[172px]">
            <h2 className="text-2xl/[30px] font-bold">Networking</h2>
            <p className="text-start">
              Get access to Job Readiness Events, Networking opportunities with
              your peers in the alumni community but also with experts in your
              field of interest, and last, but not the least, Access to Job
              opportunities.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start pt-11 pb-[40px] pl-[94px] pr-[133px] bg-[#EAEFF4]">
            <h2 className="text-2xl font-bold">Earn</h2>
            <p className="text-start">
              We live in a world where we are constantly required to upskill to
              stay relevant in our professional paths! With the The Alumni
              Community you are always presented with the opportunity to hone
              your soft skills as well as your technical skills.
            </p>
          </div>
          <div className="w-[586px] flex flex-col gap-2 justify-start items-start pt-[30.25px] pb-[53px] pl-[109px] pr-[108px] bg-[#2ED335]/35 rounded-bl-[172px]">
            <h2 className="text-2xl font-bold">Lifelong Learning</h2>
            <p className="text-start">
              We live in a world where we are constantly required to upskill to
              stay relevant in our professional paths! With the The Alumni
              Community you are always presented with the opportunity to hone
              your soft skills as well as your technical skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[594px]">
          <div className="h-[271px]">
            <img src={smile} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 justify-start items-start pt-11 pb-[40px] pl-[94px] pr-[133px] bg-[#EAEFF4]">
            <h2 className="text-2xl font-bold">MarketPlace</h2>
            <p className="text-start">
              We live in a world where we are constantly required to upskill to
              stay relevant in our professional paths! With the The Alumni
              Community you are always presented with the opportunity to hone
              your soft skills as well as your technical skills.
            </p>
          </div>
          <div className="">
            <img src={learn} alt="" className=" w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
