
import { uploadProducts} from "../api";

// mockProducts
export const mockProducts = {
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      rating: 2,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      availabilityStatus: "Low Stock",
      quantity: 0,
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      category: "furniture",
      price: 1899.99,
      rating: 4.14,
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      category: "fragrances",
      price: 49.99,
      rating: 4.85,
    },
  ],
};


// Mock para fetch
const mockFetch = (data: any, ok = true, status = 200) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok,
    status,
    json: jest.fn().mockResolvedValue(data),
  });
};

describe("uploadProducts API", () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch products successfully", async () => {
    mockFetch(mockProducts); 
    const products = await uploadProducts();

    expect(global.fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
    expect(products).toEqual(mockProducts.products); 
    expect(products).toHaveLength(3); 
  });

  it("should return an empty array if the API returns an error", async () => {
    mockFetch(null, false, 500); 
    const products = await uploadProducts();

    expect(global.fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
    expect(products).toEqual([]); 
  });

  it("should handle network errors gracefully", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    const products = await uploadProducts();

    expect(global.fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
    expect(products).toEqual([]);
  });
});