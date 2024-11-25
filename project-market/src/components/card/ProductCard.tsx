import React from 'react';
import { ProductProps } from "../../domain/product";
import useProducts from '../../hooks/useProducts';
import { useCart } from "../../hooks/useCart";




const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { toggleHeart, isHeartActive } = useProducts();
  const { addToCart } = useCart();



  return (
    <div className="card">
      <div className="container-img">
        <div className={`available ${product.availabilityStatus === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
          {product.availabilityStatus} </div>
        <img className="card-img" src={product.images[0]} alt={product.title} />
        <i
          className={`fa-regular fa-heart ${isHeartActive ? 'active' : ''}`}
          onClick={toggleHeart}
        ></i>
      </div>
      <h2>{product.title}</h2>
      <p className='card-description'>{product.description}</p>
      <p className="price">${product.price}</p>
      <p className="rating">
        {product.rating}
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>

      </p>
      <div className="container-card-button">
        <button className="card-button" onClick={() => addToCart(product)} >Add to bag</button>
      </div>
    </div>
  );
};

export default ProductCard;