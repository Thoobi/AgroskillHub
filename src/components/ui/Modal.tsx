import chillguy from "../../../public/assets/pepe.jpeg";
const Modal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/90 p-5 flex justify-center items-center">
      <div className="bg-white w-[500px] h-[500px] rounded-lg flex flex-col justify-center items-center gap-5 max-lg:w-full">
        <img src={chillguy} alt="" className="w-[200px] h-[200px]" />
        <h3 className="text-2xl font-bold">
          Hold, while we roast your resume...
        </h3>
        <p className="text-lg text-center">
          We are currently analyzing your resume and job description. This may
          take a few seconds.
        </p>
      </div>
    </div>
  );
};

export default Modal;
