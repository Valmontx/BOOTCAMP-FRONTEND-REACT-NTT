import { createContext, useState, useEffect } from "react";
import { Product } from "../domain/product";
import { CartContextType, CartProviderProps } from "../domain/cart-types";


// 1. Crear el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);


//2. Crear el provider

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([]);

    // Recuperar los prodcutos del carrito al cargar la página
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Guarda productos del carrito en el localStorage cada vez que refresque
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

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
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const totalProducts = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    }
    const getItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }



    // el objetivo del provider es exponer el estado en memoria y la funci'on actualizadora para que sea el consumidor que ejecute la acci'on que necesite y no el provider exponga todo cuando no siempre se usa
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
