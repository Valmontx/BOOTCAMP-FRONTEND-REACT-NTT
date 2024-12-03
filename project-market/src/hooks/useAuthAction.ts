import { useContext } from "react";
import { AuthActionsContext } from "../context/AuthActionsContext";

export const useAuthActions = () => {
  const context = useContext(AuthActionsContext);

  if (!context) {
    throw new Error("useAuthActions debe usarse dentro de un AuthProvider");
  }

  return context;
};