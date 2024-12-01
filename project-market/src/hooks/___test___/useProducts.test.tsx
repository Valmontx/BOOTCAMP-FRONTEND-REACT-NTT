import { renderHook, act , waitFor} from "@testing-library/react";
import useProducts from "../useProducts";
import { uploadProducts } from "../../services/api";
import { Product } from "@/domain/product";

// Mock de productos
const mockProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    category: "beauty",
    description: "Description 1",
    price: 10,
    quantity: 0,
    images: ["image1.jpg"],
    rating: 4.5,
    availabilityStatus: "In Stock",
  },
  {
    id: 2,
    title: "Product 2",
    category: "fragrances",
    description: "Description 2",
    price: 20,
    quantity: 0,
    images: ["image2.jpg"],
    rating: 4.0,
    availabilityStatus: "In Stock",
  },
];

jest.mock("../../services/api", () => ({
  uploadProducts: jest.fn(),
}));

describe("useProducts", () => {
    beforeEach(() => {
      (uploadProducts as jest.Mock).mockResolvedValue(mockProducts);
    });
  
    it("should fetch and set products", async () => {
      const { result } = renderHook(() => useProducts());
  
      
      expect(result.current.isLoading).toBe(true);
  
     
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });
  
      
      expect(result.current.products).toEqual(mockProducts);
      expect(result.current.visibleProducts).toEqual(mockProducts.slice(0, 4));
    });
  
    it("should increment cart count", () => {
      const { result } = renderHook(() => useProducts());
  
      act(() => {
        result.current.incrementCart();
      });
  
      expect(result.current.cartCount).toBe(1);
  
      act(() => {
        result.current.incrementCart();
      });
  
      expect(result.current.cartCount).toBe(2);
    });
  
    it("should filter products by search term", async () => {
      const { result } = renderHook(() => useProducts());
  
      await waitFor(() => {
        expect(result.current.products).toEqual(mockProducts);
      });
  
      act(() => {
        result.current.handleSearch("Product 1");
      });
  
      expect(result.current.visibleProducts).toEqual([mockProducts[0]]);
    });
  
    it("should filter products by category", async () => {
      const { result } = renderHook(() => useProducts());
  
      await waitFor(() => {
        expect(result.current.products).toEqual(mockProducts);
      });
  
      act(() => {
        result.current.handleCategoryFilter("beauty");
      });
  
      expect(result.current.visibleProducts).toEqual([mockProducts[0]]);
    });
  
    it("should toggle heart state", () => {
      const { result } = renderHook(() => useProducts());
  
      expect(result.current.isHeartActive).toBe(false);
  
      act(() => {
        result.current.toggleHeart();
      });
  
      expect(result.current.isHeartActive).toBe(true);
  
      act(() => {
        result.current.toggleHeart();
      });
  
      expect(result.current.isHeartActive).toBe(false);
    });
  
    it("should load all products", async () => {
      const { result } = renderHook(() => useProducts());
  
      await waitFor(() => {
        expect(result.current.products).toEqual(mockProducts);
      });
  
      act(() => {
        result.current.loadAllProducts();
      });
  
      expect(result.current.visibleProducts).toEqual(mockProducts);
      expect(result.current.isAllLoaded).toBe(true);
    });
  });
  
