import { showErrorNotification, showSuccessNotification } from "../utils/notificationSerivice";
import { validateUsername } from "../utils/regexUtils";
import { useAuthLogin } from "./useAuthLogin";

import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
};

export const validateUsernameField = (value: string) => {
  if (!value) return "Username is required";
  if (!validateUsername(value)) return "Username must only contain letters and spaces";
  return true;
};

export const validatePasswordField = (value: string) => {
  if (!value) return "Password is required";
  if (value.length < 6) return "Password must be at least 6 characters long";
  return true;
};


export const useLoginForm = () => {
  const { login } = useAuthLogin();

  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>();


  // el envío del formulario
  const onSubmit = async (data: FormData) => {
    try {
      await login(data.username, data.password);
      showSuccessNotification("Login successful!");
    } catch (err) {
      showErrorNotification("Invalid username or password");
      setError("username", { type: "manual", message: "Incorrect credentials" });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),

    errors,
  };
};