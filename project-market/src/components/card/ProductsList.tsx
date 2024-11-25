import React from "react";
import ProductCard from "./ProductCard";
import { ProductListProps } from "../../domain/product";
import useProducts from "../../hooks/useProducts";





const ProductList: React.FC<ProductListProps> = ({ products, incrementCart, }) => {
    const { isLoading } = useProducts();


    
    return (
        <div
            className="container-card">
            {isLoading ? (
                <div className="loading-spinner">
                    <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
                </div>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    )
}

export default ProductList;