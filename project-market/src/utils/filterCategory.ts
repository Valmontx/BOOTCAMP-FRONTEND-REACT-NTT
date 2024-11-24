import { Product } from "../domain/product";
import { ALLOWED_CATEGORIES } from "../state/Categories" 

export const filterProductsByCategory = (products: Product[]): Product[] => {
    return products.filter(product =>
        ALLOWED_CATEGORIES.includes(product.category)
    );
};
