import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const useHandleSignin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Please enter both email and password.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." };
    }

    // Validate password length
    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters long.",
      };
    }

    const result = login(email, password);
    if (result.success) {
      navigate("/");
      return { success: true, message: "Login successful!" };
    } else {
      return result;
    }
  };

  return { handleSignIn };
};

export default useHandleSignin;
