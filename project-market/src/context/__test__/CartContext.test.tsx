import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { CartProvider } from "../CartContex";
import { Product } from "@/domain/product";
import { CartContext } from "../CartContex";

// Mock de agregar al carrito
const mockProduct: Product = {
    id: 1,
    title: "Test Product",
    category: "beauty",
    description: "A beauty product",
    price: 10,
    quantity: 1,
    images: ["image1.jpg"],
    rating: 4.5,
    availabilityStatus: "In Stock",
  };
  
  describe("CartProvider", () => {
    test("should add a product to the cart", async () => {
      render(
        <CartProvider>
          <TestComponent />
        </CartProvider>
      );
  
      
      expect(screen.getByText(/Cart is empty/)).toBeInTheDocument();
  
     
      fireEvent.click(screen.getByText(/Add to Cart/));
  
      
      expect(await screen.findByText(/Test Product/)).toBeInTheDocument();
      expect(screen.getByText(/Quantity: 1/)).toBeInTheDocument();
    });
  
    test("should increment quantity of a product in the cart", async () => {
      render(
        <CartProvider>
          <TestComponent />
        </CartProvider>
      );
  
    
      fireEvent.click(screen.getByText(/Add to Cart/));
  
    
      fireEvent.click(screen.getByText(/Increment Quantity/));
  
     
      expect(await screen.findByText(/Quantity: 2/)).toBeInTheDocument();
    });
  
    test("should decrement quantity of a product in the cart", async () => {
      render(
        <CartProvider>
          <TestComponent />
        </CartProvider>
      );
  
      
      fireEvent.click(screen.getByText(/Add to Cart/));
  
      
      fireEvent.click(screen.getByText(/Increment Quantity/));
  
     
      fireEvent.click(screen.getByText(/Decrement Quantity/));
  
      
      expect(screen.getByText(/Quantity: 1/)).toBeInTheDocument();
    });
  });
  
  
  const TestComponent = () => {
    const { cart, addToCart, incrementQuantity, decrementQuantity } =
      React.useContext(CartContext)!;
  
    const handleAddToCart = () => {
      addToCart(mockProduct);
    };
  
    return (
      <div>
        <button onClick={handleAddToCart}>Add to bag</button>
        <div>
          {cart.length === 0 ? (
            <p>Cart </p>
          ) : (
            <div>
              {cart.map((product) => (
                <div key={product.id}>
                  <p>{product.title}</p>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => incrementQuantity(product.id)}>
                    + Quantity
                  </button>
                  <button onClick={() => decrementQuantity(product.id)}>
                    - Quantity
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };