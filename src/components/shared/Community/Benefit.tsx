import learn from "/assets/learn.svg";
import smile from "/assets/smile-benefit.svg";
const Benefit = () => {
  return (
    <section className="font-roboto text-black flex flex-col px-28 py-24 text-center justify-center gap-24 max-lg:gap-20 max-lg:w-full max-lg:px-5 max-lg:py-16">
      <div className="w-[667px] max-lg:w-full mx-auto">
        <h1 className="text-[3.5rem]/[72px] font-bold max-lg:text-4xl">
          What are the benefits within Our Community
        </h1>
      </div>
      <div className="flex gap-2 w-full max-lg:flex-col max-lg:gap-10">
        <div className="flex flex-col gap-8 justify-start items-start w-[594px] max-lg:w-full">
          <div className="flex flex-col gap-2 justify-start items-start pt-[74px] pb-[40px] pl-[87px] pr-[124px] bg-[#2ED335]/35 rounded-tr-[172px] max-lg:w-full max-lg:px-5 max-lg:rounded-[10px]">
            <h2 className="text-2xl/[30px] font-bold">Networking</h2>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              id labore iste, molestias minus ratione numquam cupiditate ad rem
              maxime enim veniam dolor fuga temporibus quidem vel iusto in
              eveniet!
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start pt-11 pb-[40px] pl-[94px] pr-[133px] bg-[#EAEFF4] max-lg:w-full max-lg:px-5">
            <h2 className="text-2xl font-bold">Earn</h2>
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              temporibus ipsa eius ratione necessitatibus minima sequi. Debitis
              dolore consequatur nobis nulla officiis cumque? Nobis minima quis
              sequi cumque, placeat eligendi!
            </p>
          </div>
          <div className="w-[586px] flex flex-col gap-2 justify-start items-start pt-[30.25px] pb-[53px] pl-[109px] pr-[108px] bg-[#2ED335]/35 rounded-bl-[172px] max-lg:w-full max-lg:px-5 max-lg:rounded-[10px]">
            <h2 className="text-2xl font-bold">Lifelong Learning</h2>
            <p className="text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              dignissimos adipisci est in quia amet, ullam ipsam eius
              reprehenderit quaerat laboriosam rem omnis inventore autem
              blanditiis vitae ipsum? Nihil, ducimus.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[594px] max-lg:w-full max-lg:gap-4">
          <div className="h-[271px] max-lg:h-full">
            <img src={smile} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 justify-start items-start pt-11 pb-[40px] pl-[94px] pr-[133px] bg-[#EAEFF4] max-lg:w-full max-lg:px-5 max-lg:rounded-[10px]">
            <h2 className="text-2xl font-bold">MarketPlace</h2>
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus rem dolorem eos, sint debitis dolores molestias illum!
              Quisquam possimus fuga, necessitatibus temporibus quae pariatur
              ipsum perferendis, accusantium quaerat nihil ut.
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
