import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { MdMarkEmailRead } from "react-icons/md";
import { LuMailWarning } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";

export default function AuthVerification() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const activation_token = searchParams.get("token");

  useEffect(() => {
    console.log(activation_token);
  }, [activation_token]);

  useEffect(() => {
    if (activation_token) {
      setIsLoading(true);
      const verifyEmail = async () => {
        try {
          console.log("Sending verification request with:", {
            activation_token,
          });
          const response = await axios.patch(
            `https://backend-nestjs-ercs.onrender.com/auth/verify`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${activation_token}`,
              },
            }
          );
          const data = response.data;
          console.log(data);
          if (data.success) {
            setError(null);
            toast.success(data.data);
            setIsVerified(true);
          } else {
            setError(data.message);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
            setError(errorMessage);
            throw new Error(errorMessage);
          }
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      };
      verifyEmail();
    }
  }, [activation_token]);

  return (
    <section className="flex flex-col gap-5 items-center justify-center h-full">
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

      <div>
        {isLoading ? (
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-green-600"></div>
            <h1 className="text-2xl font-bold text-green-600">
              Verifying your email...
            </h1>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-3">
            {isVerified && (
              <div className="flex flex-col items-center justify-center">
                <MdMarkEmailRead className="text-green-600 text-8xl" />
                <h1 className="text-4xl font-bold text-green-600 text-center">
                  Your email has been verified successfully!
                </h1>
              </div>
            )}
            {error && (
              <div className="flex flex-col items-center justify-center">
                <LuMailWarning className="text-red-600 text-8xl" />
                <h1 className="text-2xl font-bold text-red-600">{error}</h1>
              </div>
            )}
          </div>
        )}
      </div>
      {isVerified && (
        <p className="text-lg text-center">
          You can now log in to your account.
        </p>
      )}
      {error && (
        <p className="text-lg text-center">
          Please check your email for the verification link.
        </p>
      )}
      {isVerified && (
        <div className="flex flex-col gap-5 justify-center items-center ">
          <Link
            to={"/auth/login"}
            className="bg-green-600 px-4 py-[10px] text-white rounded-md group"
          >
            Proceed to login
            <CiLocationArrow1 className="inline-block ml-2 text-xl text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </Link>
        </div>
      )}
    </section>
  );
}
