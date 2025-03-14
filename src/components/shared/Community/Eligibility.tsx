import eligible from "/assets/rect-eligible.svg";
const Eligibility = () => {
  return (
    <section className="bg-[#F6FBFF] pl-[122px] pr-20 flex gap-[169px] py-[81px] font-roboto max-lg:w-full max-lg:flex-col  max-lg:gap-5 max-lg:px-5">
      <div className="max-lg:w-full">
        <img src={eligible} alt="" className="max-lg:w-full" />
      </div>
      <div className="flex flex-col gap-4 max-lg:gap-5 justify-center items-start">
        <h3 className="text-4xl/[36.4px] font-bold">Eligibility</h3>
        <p className="text-lg/[27px] w-[370px] max-lg:w-full">
          The Alumni Community is reserved for ALX graduates. As part of this
          elite tier, you gain access to expanded career support.
        </p>
        <button className="w-[194px] text-white h-[51px] bg-buttonprimary rounded-[4px]">
          Join Us Today
        </button>
      </div>
    </section>
  );
};

export default Eligibility;
