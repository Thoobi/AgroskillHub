import bgClog from "/assets/noise.webp";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const Waitlist = () => {
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

    if (
      !formData.Firstname ||
      !formData.Lastname ||
      !formData.Phonenumber ||
      !formData.Emailaddress
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    // console.log("Form Data:", formData);

    try {
      const url =
        "https://script.google.com/macros/s/AKfycbyOxtWWoMBKNkQfrawZiLYeWyxS_WPCwmnRJKqqeDEDf3UXDfwqAAF_BO9Kfa6pAPIVDg/exec";

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `First=${formData.Firstname}&Last=${formData.Lastname}&Gender=${formData.Gender}&Phone=${formData.Phonenumber}&Email=${formData.Emailaddress}`,
      }).then((res) => {
        console.log("Response:", res);
      });

      toast.success("Successfully joined waitlist!");
      console.log(
        "Form Data:",
        formData.Firstname,
        formData.Lastname,
        formData.Emailaddress,
        formData.Phonenumber
      );

      // Reset form
      setFormData({
        Firstname: "",
        Lastname: "",
        Gender: "",
        Phonenumber: "",
        Emailaddress: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to join waitlist");
    }
  };

  return (
    <section
      className="h-screen max-lg:py-12 bg-black text-white font-jarkata w-full max-lg:px-5 flex justify-center pt-10"
      style={{
        backgroundImage: `url(${bgClog})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Toaster position="bottom-right" richColors={true} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 py-5 bg-white/20 border-[2px] border-[#EDEDED] w-[800px] h-[700px] rounded-[20px] max-lg:w-full p-8"
      >
        <h2 className="text-6xl font-jarkata font-bold text-center">
          Join the Waitlist
        </h2>
        <p className="text-lg text-center font-medium">
          Be the first to know when we launch
        </p>
        <div className="py-5 flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={formData.Firstname}
              onChange={handleInputChange("Firstname")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={formData.Lastname}
              onChange={handleInputChange("Lastname")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.Gender}
              onChange={handleInputChange("Gender")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.Phonenumber}
              onChange={handleInputChange("Phonenumber")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Enter your email address"
              value={formData.Emailaddress}
              onChange={handleInputChange("Emailaddress")}
              className="w-[450px] h-[47px] p-2 text-black focus:outline-none rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black/40 w-[250px] h-[47px] hover:bg-black/50"
          >
            Join Waitlist
          </button>
        </div>
      </form>
    </section>
  );
};

export default Waitlist;
