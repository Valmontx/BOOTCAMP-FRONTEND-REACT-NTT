import { useContext } from "react";
import { AuthStateContext } from "../context/AuthStateContext";

export const useAuthState = () => {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error("useAuthState debe usarse dentro de un AuthProvider");
  }

  return context;
};