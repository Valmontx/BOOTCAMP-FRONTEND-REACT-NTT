import { Product } from "../domain/product";
import { uploadProducts } from "../services/api";
import { useState } from "react";
import { useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchProducts, setSearchProducts] = useState("")
  const [categorieFilter, setcategorieFilter] = useState("all")
  const [isHeartActive, setIsHeartActive] = useState(false);



  const FetchProducts = async () => {
    try {
      setIsLoading(true);
      const getProductsFetch = await uploadProducts();
      setProducts(getProductsFetch);
      setVisibleProducts(getProductsFetch.slice(0, 4));
    } catch {
      console.log("Error products", Error)
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    FetchProducts();
  }, []);

  // boton de ver mas
  const loadAllProducts = () => {
    setVisibleProducts(products);
    setIsAllLoaded(true)
  }
  // Boton para agregar al carrito
  const incrementCart = () => {
    setCartCount(cartCount + 1);
  }
  // Busqueda de productos
  const handleSearch = (search: string) => {
    setSearchProducts(search);

    const filteredProducts = products.filter((product) =>
      [product.title, product.description, String(product.price), String(product.rating)]
        .some(value => value.toLowerCase().includes(search.toLowerCase())))
    setVisibleProducts(filteredProducts);
  }


  // Selector de productos por categoría
  const handleCategoryFilter = (category: string) => {
    console.log("All products before filtering:", products.map(p => p.category));

    setcategorieFilter(category);

    const filterProducts = products.filter((product) =>
      category === "all" ? true : product.category === category
    );
    setVisibleProducts(filterProducts.slice(0, 4));

  }

  // boton corazon activo para cambio de color 
  const toggleHeart = () => {
    setIsHeartActive(!isHeartActive);
  };


  return {
    products,
    isAllLoaded,
    visibleProducts,
    searchProducts,
    categorieFilter,
    cartCount,
    isHeartActive,
    isLoading,
    toggleHeart,
    loadAllProducts,
    incrementCart,
    handleSearch,
    handleCategoryFilter,
   
  }
}

export default useProducts 