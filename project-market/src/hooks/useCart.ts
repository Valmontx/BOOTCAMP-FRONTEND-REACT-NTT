// paso 3. Consumir  consumir el contexto 
import { useContext } from "react";
import { CartContext } from "../context/CartContex";

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe estar dentro de un CartProvider");
    }
    return context;
};