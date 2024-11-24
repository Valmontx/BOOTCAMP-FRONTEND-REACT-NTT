import { FC } from "react";
import {Route , Routes} from "react-router-dom";
import { ModuleRoutes } from "./module-routes";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import "./style.css"

const App: FC = () => {

  
  return (
    <Routes>
    <Route path={ModuleRoutes.Home} element={<Home/>} />
    <Route path={ModuleRoutes.Cart} element={<Cart/>} />
    </Routes>
  );
};

export default App;

