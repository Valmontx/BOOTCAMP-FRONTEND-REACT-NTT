// falta test
import { useAuthLogin } from "../hooks/useAuthLogin";
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuthLogin()
    if (!isAuthenticated) {

        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;