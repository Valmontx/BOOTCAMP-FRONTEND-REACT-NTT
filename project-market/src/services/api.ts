
import { Product } from "../domain/product";
import { ProductApiResponse } from "../domain/product";
// import { filterProductsByCategory } from "../utils/filterCategory";



export const uploadProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data: ProductApiResponse = await response.json();
        return data.products;
        
    } catch (error) {
        console.log("Error fetching", error);
        return [];
    }
};



export const uploadProductsRequest = {
    uploadProducts,
};







