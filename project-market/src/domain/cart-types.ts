//Tipos y las acciones 

import { ReactNode } from "react";
import { Product } from "./product";

//Tipos para formulario

export interface FormData {
  fullname: string;
  district: string;
  adress: string;
  phone: string;
}

export interface FormErrors {
  [key: string]: string;
}

//tipos para carrito 

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  incrementQuantity: (quantity: number) => void;
  decrementQuantity: (quantity: number) => void;
  deleteFromCart: (productId: number) => void;
  totalProducts: () => number; // Total de la suma de todos los productos
  getItemCount: () => number; //Total de c/u
}
 
// Tipo para las props del proveedor
export interface CartProviderProps {
  children: ReactNode;
}