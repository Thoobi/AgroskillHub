import useAuth from "../hooks/useAuth";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function Login() {
  const { handleLogin, loading, showPassword, handleShowPassword, authToken } =
    useAuth();

  useEffect(() => {
    if (authToken) {
      console.log("User is already logged in:", authToken);
    }
  }, [authToken]);

  const [formData, setFormData] = useState({
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

    if (!formData.email || !formData.password) {
      toast.warning("Please fill all fields");
      return;
    }
    console.log(formData);
    console.log("Signing up...");
    await handleLogin(formData.email, formData.password);
  };

  return (
    <section className="md:px-20 md:w-full font-jarkata max-lg:flex max-lg:justify-center max-lg:py-0">
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
          Login
        </h2>
        <p className="text-base text-center max-lg:text-sm texts-gray-500 font-medium">
          Please fill the form with your credentials to continue
        </p>
        <div className="py-5 flex flex-col gap-5 justify-center items-center max-lg:w-full">
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
            <span className="flex justify-between items-start gap-2 max-lg:w-full pr-3">
              <label htmlFor="password">Password</label>

              <span className="text-sm text-gray-500">
                <Link
                  to="/reset-password"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Forgot Password?
                </Link>
              </span>
            </span>
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
            className="bg-black w-[250px] h-[47px] hover:bg-black max-lg:bg-black/80"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                Signing in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <span className="text-center text-base">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-green-600 hover:text-green-700 underline"
          >
            Sign up
          </Link>
        </span>
      </form>
    </section>
  );
}
