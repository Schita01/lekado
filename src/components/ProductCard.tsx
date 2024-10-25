import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the product details page with the product name as a parameter
    navigate(`/products/${product.name}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="image-placeholder">
        <div className="favorite-icon">❤</div>
      </div>
      <h3 className='product-card-h3'>{product.name}</h3>
      <p className='discount-p'>
        <strike>{product.oldPrice}</strike>
        <span className="new-price">{product.newPrice}</span>
      </p>
      <div className="rating">⭐⭐⭐⭐⭐</div>
      <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
