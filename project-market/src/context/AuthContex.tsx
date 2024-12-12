// falta test
import { AuthloginProps } from "../domain/login-types"
import { createContext, useState, useEffect, ReactNode } from "react";
import { loginService } from "../services/authService";
import { AuthStateContext } from "./AuthStateContext";
import { AuthActionsContext } from "./AuthActionsContext";
import { FC } from "react";
import React from "react";

//Creacion del contexto
export const AuthContextLogin = createContext<AuthloginProps | undefined>(undefined);



export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  
   useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("username");

    if (token && storedUser) {
      setIsAuthenticated(true);
      setUsername(storedUser);
    }
  }, []);

  const login = async (username: string, password: string) => {

    const response = await loginService(username, password);
    if (response.success) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", username);

      setIsAuthenticated(true);
      setUsername(username);
    } else {
      throw new Error("Credenciales inválidas");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUsername(null);
  };

  return (
    <AuthStateContext.Provider value={{ isAuthenticated, username }}>
    <AuthActionsContext.Provider value={{ login, logout }}>
        {children}
    </AuthActionsContext.Provider>
</AuthStateContext.Provider>
  );
};