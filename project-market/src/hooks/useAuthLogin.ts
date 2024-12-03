import { useContext } from "react";

import { AuthActionsContext } from "../context/AuthActionsContext";
import { AuthStateContext } from "../context/AuthStateContext";

export const useAuthLogin = () => {
  const state = useContext(AuthStateContext);
  const actions = useContext(AuthActionsContext);

  if (!state || !actions) {
    throw new Error("useAuthLogin debe usarse dentro de un AuthProvider");
  }

  return { ...state, ...actions };
}