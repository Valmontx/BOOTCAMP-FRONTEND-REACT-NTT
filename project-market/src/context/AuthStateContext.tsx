
import { createContext } from "react";


export const AuthStateContext = createContext<{ 
    isAuthenticated: boolean; 
    username: string | null; 
} | undefined>(undefined);