import React from "react";
import { toast, Toaster } from "sonner";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const SignUp = () => {
  const { handleSignUp, loading, showPassword, handleShowPassword } = useAuth();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.warning("Please fill all fields");
      return;
    }
    console.log(formData);
    console.log("Signing up...");
    await handleSignUp(formData.name, formData.email, formData.password);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="max-lg:w-full md:px-20 text-black font-jarkata max-lg:flex max-lg:justify-center max-lg:py-0">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            font: "jarkata",
            fontSize: "14px",
          },
        }}
        richColors={true}
      />
      <form
        className="flex flex-col gap-4 py-5 w-full h-full rounded-[20px] max-lg:w-full p-8 max-lg:p-2 max-lg:py-2"
        onSubmit={handleClick}
      >
        <h2 className="text-5xl font-jarkata font-bold text-center max-lg:text-4xl">
          Signup
        </h2>
        <p className="text-base text-gray-500 text-center max-lg:text-sm font-medium">
          Please fill the form below to get started.
        </p>
        <div className="py-5 flex flex-col max-lg:py-2 gap-5 justify-center items-center max-lg:w-full">
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange("name")}
              className="w-[450px] h-[47px] p-2 text-black border-2 border-black bg-transparent focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange("email")}
              className="w-[450px] h-[47px] p-2 text-black border-2 border-black bg-transparent focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="password">Password</label>
            <div className="w-[450px] h-[47px] p-2 text-black border-2 border-black bg-transparent focus:outline-none rounded-md max-lg:w-full flex flex-row justify-between items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange("password")}
                className="outline-none w-full h-full focus:outline-none bg-transparent"
              />
              <span>
                {showPassword ? (
                  <span onClick={handleShowPassword}>
                    <LuEye className="cursor-pointer" />
                  </span>
                ) : (
                  <span onClick={handleShowPassword}>
                    <LuEyeClosed className="cursor-pointer" />
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white">
          <button
            type="submit"
            disabled={loading}
            className="bg-black w-[250px] h-[47px] hover:bg-black max-lg:bg-black/90"
          >
            {loading ? (
              <span className="text-base">Creating account...</span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <span className="text-center text-base">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-buttonprimary hover:text-buttonprimary/50 underline"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
