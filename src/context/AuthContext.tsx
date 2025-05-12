import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { API_BASE_URL } from "../constant";

interface AuthContextType {
  handleSignUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  loading: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  handlePasswordReset: (email: string) => Promise<void>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowPassword: () => void;
  authToken?: string | null;
  handleLogout: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  email: string | "";
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleOnchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  handleSignUp: async () => {},
  loading: false,
  setLoading: () => {},
  handleLogin: async () => {},
  handlePasswordReset: async () => {},
  showPassword: false,
  setShowPassword: () => {},
  handleShowPassword: () => {},
  authToken: null,
  handleLogout: () => {},
  email: "",
  setEmail: () => {},
  handleOnchange: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    }
  }, [authToken]);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      console.log("Sending signup request with:", { name, email });
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.data);
        toast.success(
          "An email has been sent to your inbox for verification. Please verify your email."
        );
      }
      setLoading(false);
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

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log("Sending login request with:", { email });
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log(response.data);
      if (response.data.success) {
        setAuthToken(response.data.data.accessToken);
        toast.success(response.data.data.accessToken);
      }
      setLoading(false);
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

  const handlePasswordReset = async (email: string) => {
    try {
      console.log("Sending password reset request with:", { email });
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/auth/reset-password`,
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.data);
        setEmail("");
      }
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }
      setLoading(false);
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  const handleLogout = () => {
    try {
      console.log("Logging out...");
      setLoading(true);
      const response = axios.patch(
        `${API_BASE_URL}/auth/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }
      setLoading(false);
    }

    setAuthToken(null);
    localStorage.removeItem("authToken");
    toast.success("Logged out successfully");
  };

  const value = {
    handleSignUp,
    loading,
    handleLogin,
    handlePasswordReset,
    showPassword,
    setShowPassword,
    handleShowPassword,
    authToken,
    handleLogout,
    setLoading,
    email,
    setEmail,
    handleOnchange,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext;
