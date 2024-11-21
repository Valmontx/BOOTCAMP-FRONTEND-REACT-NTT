import { displayProducts,  state, Product } from "../index";


//Consuming the API and Filtering by Categories

 export async function uploadProducts(): Promise<Product[]> {
    try {
        const response = await fetch('https://dummyjson.com/products');
        // podr'ias crearle un tipo a data para que no sea necesario tiparlo forzadamente en el callback de products
        const data = await response.json();
        state.allProducts = data.products.filter((product: Product) =>
            product.category === "beauty" ||
            product.category === "fragrances" || 
            product.category ===  "furniture"
        );

        displayProducts(state.allProducts.slice(0, state.visibleProducts));
        return data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}