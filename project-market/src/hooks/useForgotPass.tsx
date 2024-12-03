import { validateEmail } from "../utils/regexUtils";
import { useState } from "react";

export const useForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setError(null);
      setSuccessMessage(null);
    };
  
    const handleSubmit = () => {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        setSuccessMessage(null);
      } else {
    
        setSuccessMessage("Information sent to the entered email");
        setError(null);
        setEmail(""); 
      }
    };
  
    return {
      email,
      error,
      successMessage,
      handleEmailChange,
      handleSubmit,
    };
  };