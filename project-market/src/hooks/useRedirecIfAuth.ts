// falta test
import { useNavigate } from "react-router-dom";
import { useAuthLogin } from "./useAuthLogin";
import { useEffect } from "react";
import { ModuleRoutes } from "../module-routes";


const useRedirectIfAuthenticated = () => {
    const { isAuthenticated } = useAuthLogin();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isAuthenticated) {
        navigate(ModuleRoutes.Home);
      }
    }, [isAuthenticated, navigate]);
  };
  
  export default useRedirectIfAuthenticated;