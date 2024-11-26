import { FC } from "react";
import {Route , Routes} from "react-router-dom";
import { ModuleRoutes } from "./module-routes";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import "./style.css"
import "./Pages/Cart/cartStyle.css"
import "./Pages/Cart/components/FooterStyle.css"
import "./components/card/cardStyle.css"
import "./components/filters/filterStyle.css"
import "./components/navbar/navbarStyle.css"

import "./Pages/Home/homeStyle.css"


import { CartProvider } from "./context/CartContex";

const App: FC = () => {

  
  return (
    <CartProvider>
    <Routes>
    <Route path={ModuleRoutes.Home} element={<Home/>} />
    <Route path={ModuleRoutes.Cart} element={<Cart/>} />
    </Routes>
    </CartProvider>
  );
};

export default App;

