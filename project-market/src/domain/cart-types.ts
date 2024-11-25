//Aqui se define los tipos y las acciones 

import { ReactNode } from "react";
import { Product } from "./product";

// Define el tipo del contexto
export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  incrementQuantity: (quantity: number) => void;
  decrementQuantity: (quantity: number) => void;
  deleteFromCart: (productId: number) => void;
  totalProducts: () => number;
  getItemCount: () => number;
}
 
// Define el tipo para las props del proveedor
export interface CartProviderProps {
  children: ReactNode;
}