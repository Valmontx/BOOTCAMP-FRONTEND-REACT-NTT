
export interface Product {
  id: number;
  title: string;
  description: string;
  category: ProductCategory;
  price: number;
  rating: number;
  images: string[];
  availabilityStatus: string
  quantity: number
  
}

export interface ProductProps {
  product: Product;
  

}

export type ProductCategory = "beauty" | "fragrances" | "furniture";

export type ProductApiResponse = {
  products: Product[];
}

export interface ProductListProps {
  products: Product[]; 
  incrementCart: () => void;
}

export interface NavbarProps {
  cartCount: number;
}

export interface SearchFilterProps {
  onSearch: (search: string) => void;
}
export interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}



