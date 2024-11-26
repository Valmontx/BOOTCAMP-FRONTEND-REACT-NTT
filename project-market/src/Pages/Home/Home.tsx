import {FC}  from "react";
import ProductList from "../../components/card/ProductsList";
import Navbar from "../../components/navbar/Navbar";
import SearchFilter from "../../components/filters/SearchFilter";
import CategoryFilter from "../../components/filters/CategoryFilter";
import Footer from "../../components/footer/Footer";
import useProducts from "../../hooks/useProducts";



const Home: FC = () => {

  const {
    visibleProducts,
    cartCount,
    isAllLoaded,
    loadAllProducts,
    incrementCart,
    handleSearch,
    handleCategoryFilter,
  } = useProducts();

  
  return (
    <div className="App">
      <Navbar cartCount={cartCount} />
      <section className="header-banner">
        <p className="header-banner-text" >Black friday! 24Hours only 50% OFF</p>
      </section>
      <div className="section-search-option">
        <SearchFilter onSearch={handleSearch} />
        <CategoryFilter onCategoryChange={handleCategoryFilter} />
      </div>
      <section className="section-container-card">
        <h3 className="section-subtittle">Welcome to YouMarket, your one-stop shop for beauty, accessories, 
          and so much more! Discover a world of elegance, style, and self-care, all in one place. 
          Whether you're seeking the latest beauty trends,chic accessories to elevate your look, or unique 
          finds to pamper yourself, YouMarket has it all.</h3>
        <div className="container-card">
          <ProductList products={visibleProducts} incrementCart={incrementCart} />
        </div>
        <button className="see-more" onClick={loadAllProducts} disabled={isAllLoaded} >
          {isAllLoaded ? "All products are loaded" : "see more products"}
        </button>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;