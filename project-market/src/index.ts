
export { uploadProducts } from "./services/api";

export { displayProducts, loadAllProducts } from "./utils/display";

export { filterByCategory, searchProducts } from "./utils/filter";;

export { incrementCartCounter } from "./pages/shopping-cart";

export {categoryMapper} from "../src/utils/filter"



export const state = {
    allProducts: [] as Product[],
    visibleProducts: 4,
};

export interface Product {
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    images: string[];
}

