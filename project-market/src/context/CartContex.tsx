import { createContext, useState, useEffect } from "react";
import { Product } from "../domain/product";
import { CartContextType, CartProviderProps } from "../domain/cart-types";


// 1. Crear el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);


//2. Crear el provider

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([]);


    const addToCart = (product: Product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        if (productInCartIndex >= 0) {
            const newCart = [...cart];
            newCart[productInCartIndex].quantity += 1
            setCart(newCart);
        } else {
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity: 1,
                }
            ]));
        }
    }
    
    
    const incrementQuantity = (productId: number) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decrementQuantity = (productId: number) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const deleteFromCart = (productId: number) => {
        setCart(prevCart  => prevCart.filter(item => item.id !== productId) )
    }

    const totalProducts  = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const getItemCount = ()=> {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    

    return (

        <CartContext.Provider value={{
            cart,
            addToCart,
            incrementQuantity,
            decrementQuantity,
            deleteFromCart,
            totalProducts,
            getItemCount
        }}>
            {children}

        </CartContext.Provider>
    )

}
