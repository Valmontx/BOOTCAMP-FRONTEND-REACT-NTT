import React from 'react';
import {ProductProps} from "../../domain/product";
import useProducts from '../../hooks/useProducts';

const ProductCard: React.FC<ProductProps> = ({  title, description, price, rating, images, incrementCart }) => {
const {toggleHeart, isHeartActive } = useProducts();

  return (
    <div className="card">
      <div className="container-img">
        <img className="card-img" src={images} alt={title} />
        <i
          className={`fa-regular fa-heart ${isHeartActive ? 'active' : ''}`}
          onClick={toggleHeart}
        ></i>
      </div>
      <h2>{title}</h2>
      <p className='card-description'>{description}</p>
      <p className="price">${price}</p>
      <p className="rating">
        {rating}
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        
      </p>
      <div className="container-card-button">
        <button className="card-button" onClick={incrementCart} >Add to bag</button>
      </div>
    </div>
  );
};

export default ProductCard;