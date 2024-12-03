import { createContext } from "react";



export const AuthActionsContext = createContext<{ 
    login: (username: string, password: string) => Promise<void>; 
    logout: () => void; 
} | undefined>(undefined);