import bgClog from "/assets/noise.webp";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const Waitlist = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Gender: "",
    Phonenumber: "",
    Emailaddress: "",
  });

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (
      !formData.Firstname ||
      !formData.Lastname ||
      !formData.Phonenumber ||
      !formData.Emailaddress
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      const url =
        "https://script.google.com/macros/s/AKfycbyQjdWYJrA6RgR0VpN9nlf6NOnsJrCk0ueTNdBKZxctTgFBrrooUo1EppvIdbx8NRintA/exec";

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `Firstname=${formData.Firstname}&Lastname=${formData.Lastname}&Gender=${formData.Gender}&Phonenumber=${formData.Phonenumber}&Email=${formData.Emailaddress}`,
      }).then((res) => {
        if (res.status === 200) {
          toast.success(`Successfully joined waitlist!`);
          setLoading(false);
          setFormData({
            Firstname: "",
            Lastname: "",
            Gender: "",
            Phonenumber: "",
            Emailaddress: "",
          });
        }
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to join waitlist");
    }
  };

  return (
    <section
      className="max-lg:h-full h-full py-20 pt-28 bg-black text-white font-jarkata w-full max-lg:px-3 flex justify-center  max-lg:py-8 max-lg:pt-28"
      style={{
        backgroundImage: `url(${bgClog})`,
        backgroundSize: "cover",
      }}
    >
      <Toaster
        position="bottom-right"
        expand={true}
        toastOptions={{
          style: {
            font: "jarkata",
            fontSize: "14px",
          },
        }}
        richColors={true}
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 py-5 bg-white/20 border-[2px] border-[#EDEDED] w-[800px] h-[700px] rounded-[20px] max-lg:w-full p-8 max-lg:p-4 max-lg:h-full"
      >
        <h2 className="text-6xl font-jarkata font-bold text-center max-lg:text-5xl">
          Join the Waitlist
        </h2>
        <p className="text-lg text-center max-lg:text-base font-medium">
          Be the first to know when we launch
        </p>
        <div className="py-5 flex flex-col gap-2 justify-center items-center max-lg:w-full">
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={formData.Firstname}
              onChange={handleInputChange("Firstname")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={formData.Lastname}
              onChange={handleInputChange("Lastname")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.Gender}
              onChange={handleInputChange("Gender")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md max-lg:w-full"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.Phonenumber}
              onChange={handleInputChange("Phonenumber")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Enter your email address"
              value={formData.Emailaddress}
              onChange={handleInputChange("Emailaddress")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-black/40 w-[250px] h-[47px] hover:bg-black/50 max-lg:bg-black/50"
          >
            {loading ? "Loading..." : "Join Waitlist"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Waitlist;
