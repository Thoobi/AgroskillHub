import { Toaster, toast } from "sonner";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function PasswordReset() {
  const { handlePasswordReset, loading, email, handleOnchange } = useAuth();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.warning("Please fill all fields");
      return;
    }
    console.log(email);
    console.log("Sending password reset email...");
    await handlePasswordReset(email);
  };

  return (
    <section className="md:px-20 max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items-center text-black font-jarkata max-lg:px-1 flex justify-center max-lg:py-1 ">
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
        className="flex flex-col gap-4 py-5 w-full h-full rounded-[20px] max-lg:w-full p-8 max-lg:p-2 max-lg:h-full"
        onSubmit={handleClick}
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-5xl font-jarkata font-bold text-center max-lg:text-4xl">
            Forgot Password?
          </h2>
          <p className="text-base text-center max-lg:text-sm font-medium">
            Please enter your email to reset your password.
          </p>
        </div>
        <div className="py-5 flex flex-col gap-5 justify-center items-center max-lg:w-full max-lg:py-3">
          <div className="flex flex-col gap-2 max-lg:w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleOnchange}
              className="w-[450px] h-[47px] p-2 text-black border-2 border-black bg-transparent focus:outline-none rounded-md max-lg:w-full"
            />
          </div>
        </div>
        <div className="flex justify-center text-white">
          <button
            type="submit"
            className="bg-green-600 px-4 py-[10px] text-white group"
          >
            <span className="text-base">
              {loading ? "Verifying mail..." : "Reset password"}
            </span>
          </button>
        </div>
        <p className="text-base text-center">
          Remembered your password?{" "}
          <Link
            to="/auth/login"
            className="text-green-600 hover:text-green-700 underline"
          >
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}
