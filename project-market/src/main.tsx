import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import { AuthProvider } from "./context/AuthContex";
import "./style.css";
import App from "./App";



createRoot(document.getElementById("root")!).render(
  
 <StrictMode>
  <AuthProvider>
    <BrowserRouter basename="/">
    <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
  
);
