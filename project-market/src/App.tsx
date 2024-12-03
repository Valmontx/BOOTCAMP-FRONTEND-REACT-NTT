import { FC } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ModuleRoutes } from "./module-routes";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { CartProvider } from "./context/CartContex";
import ProtectedRoute from "./Hoc/ProtectedRoute";
import "./style.css"
import "./Pages/Cart/cartStyle.css"
import "./Pages/Login/LoginStyle.css"
import "./Pages/Login/modal/ModalStyle.css"
import "./Pages/Cart/components/FooterStyle.css"
import "./components/card/cardStyle.css"
import "./components/filters/filterStyle.css"
import "./components/navbar/navbarStyle.css"
import "./Pages/Home/homeStyle.css"





const App: FC = () => {


  return (

    <CartProvider>
      <Routes>
        <Route path={ModuleRoutes.Login} element={<Login />} />
        <Route path={ModuleRoutes.Home}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
        <Route path={ModuleRoutes.Cart} element={
           <ProtectedRoute>
            <Cart />
           </ProtectedRoute> 
          } />
      </Routes>
    </CartProvider>

  );
};

export default App;

