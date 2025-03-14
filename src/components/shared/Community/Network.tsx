import network from "/assets/network-img.jpg";
const Network = () => {
  return (
    <section className="w-full bg-primarywhite font-roboto px-16 py-32 max-lg:w-full max-lg:px-5 flex flex-row gap-14 max-lg:flex-col max-lg:py-14">
      <div className="flex flex-col justify-center items-start gap-7 w-[502px] max-lg:w-full">
        <h1 className="text-5xl/[59px] font-bold max-lg:text-5xl">
          Network with a Community of Learners
        </h1>
        <p className="text-xl/[32px] font-normal max-lg:text-lg">
          The vibrant and growing youth population presents a unique opportunity
          for networking and collaboration among peers. By coming together, we
          can learn from one another and support each other as we navigate the
          challenges of an evolving global workforce.
        </p>
        <button className="w-[194px] h-[51px] bg-buttonprimary text-white rounded-[4px]">
          Join Us Today
        </button>
      </div>
      <div>
        <img src={network} alt="" />
      </div>
    </section>
  );
};

export default Network;
