
export { uploadProducts } from "./services/api";

export { displayProducts, loadAllProducts } from "./utils/display";

export { filterByCategory, searchProducts } from "./utils/filter";;

export { incrementCartCounter } from "./pages/shopping-cart";

export {categoryMapper} from "../src/utils/filter"


// esto deber'ia estar en otro archivo como estado global ya que este index es un archivo de barril
export const state = {
    allProducts: [] as Product[],
    visibleProducts: 4,
};

// esto debe estar en otro archivo de dominions o interfaces
export interface Product {
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    images: string[];
}

