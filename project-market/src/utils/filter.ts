import { displayProducts } from "../utils/display";
import { Product , state } from "../index";


// no encontr'e donde se usa este objeto
// Mapper for section of filter categories 
export const categoryMapper: { [key: string]: string } = {
    fragrances: "fragrances",
    beauty: "makeup",
    furniture: "furniture",
}

document.getElementById("category-selector")?.addEventListener("change", (event) => {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    filterByCategory(selectedCategory);
});


// Filter - selector category

export function filterByCategory(selectedCategory: string): void {
    const { allProducts, visibleProducts } = state;
    let filteredProducts: Product[];
    if (selectedCategory === "all") {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(({ category }) => category === selectedCategory);
    }
    // no console
    console.log("Filtered products:", filteredProducts);
    displayProducts(filteredProducts.slice(0, visibleProducts));
}


// Filter - the search

export function searchProducts(search: string): void {
    const { allProducts } = state;
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        String(product.price).includes(search.toLowerCase()) ||
        String(product.rating).includes(search.toLowerCase())
    );

    displayProducts(filteredProducts)
}

document.getElementById("search-products")?.addEventListener("input", (event) => {
    const valueInput = (event.target as HTMLInputElement).value;
    searchProducts(valueInput);
})