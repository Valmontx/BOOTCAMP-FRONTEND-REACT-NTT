import { filterProductsByCategory } from "../filterCategory";
import { Product } from "@/domain/product";

describe('filterProductsByCategory', () => {
  it('should filter products based on allowed categories', () => {
    const products: Product[] = [
        { 
            id: 1, 
            title: "Product 1", 
            category: "beauty", 
            description: "A beauty product", 
            price: 10, 
            rating: 4.5, 
            images: ["image1.jpg"], 
            availabilityStatus: "In Stock", 
            quantity: 5
          },
          { 
            id: 2, 
            title: "Product 2", 
            category: "furniture", 
            description: "A furniture item", 
            price: 150, 
            rating: 4.0, 
            images: ["image2.jpg"], 
            availabilityStatus: "In Stock", 
            quantity: 3
          },
          
    ];

    const filteredProducts = filterProductsByCategory(products);

    expect(filteredProducts).toHaveLength(2);
    expect(filteredProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ category: "beauty" }),
        expect.objectContaining({ category: "furniture" }),
      ])
    );
  });
});
