import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import useAuth from "../hooks/useAuth";

export default function PasswordResetVerify() {
  const { loading, showPassword, setShowPassword, setLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const password_reset_token = searchParams.get("token");
  const [new_password, setNewPassword] = useState<string>("");

  useEffect(() => {
    console.log(password_reset_token);
  }, [password_reset_token]);

  useEffect(() => {
    if (password_reset_token) {
      localStorage.setItem("password_reset_token", password_reset_token);
    }
  }, [password_reset_token]);

  const updatePassword = async () => {
    try {
      setLoading(true);
      console.log("Sending verification request with:", {
        password_reset_token,
        new_password,
      });
      const response = await axios.patch(
        `https://backend-nestjs-ercs.onrender.com/auth/set-password`,
        { password: new_password },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${password_reset_token}`,
          },
        }
      );
      const data = response.data;
      console.log(data);
      if (data.success) {
        toast.success(data.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="md:px-20 max-lg:w-full max-lg:flex max-lg:justify-center max-lg:py-0">
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

      <div className="flex flex-col items-center justify-center px-3">
        <form
          className="flex flex-col items-center justify-center gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            updatePassword();
          }}
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="text-6xl font-jarkata font-bold text-center max-lg:text-5xl">
              Password Reset
            </h2>
            <p className="text-base text-center max-lg:text-sm font-medium">
              Please enter your new password.
            </p>
          </div>
          <div className="w-[450px] h-[47px] p-2 text-black border-2 border-black bg-transparent focus:outline-none rounded-md max-lg:w-full flex flex-row justify-between items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your new Password"
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
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
        </form>
        <p className="text-base max-lg:text-sm text-center py-3">
          Remembered your password?{" "}
          <Link
            to="/auth/login"
            className="text-green-600 hover:text-green-700 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
