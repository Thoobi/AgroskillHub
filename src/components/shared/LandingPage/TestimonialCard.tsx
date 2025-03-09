interface testimony {
  name: string;
  location: string;
  image: string;
  description: string;
}
const TestimonialCard = ({ name, location, image, description }: testimony) => {
  return (
    <div className="flex flex-col gap-6 px-10 py-10 rounded-3xl w-[396px] max-lg:w-full border-[1px] border-[#EDEDED] shadow-[#3F3F3F]/[6]">
      <span className="flex gap-3">
        <span className="w-16 h-16 rounded-full overflow-hidden bg-black">
          <img src={image} alt="potato" />
        </span>
        <span>
          <h1 className="text-lg font-bold">{name}</h1>
          <h2 className="text-lg font-semibold text-[#505050]">{location}</h2>
        </span>
      </span>
      <p className="text-base font-medium text-[#505050]">{description}</p>
    </div>
  );
};

export default TestimonialCard;
