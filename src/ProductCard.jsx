import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price} руб.</p>
        
        {quantity === 0 ? (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        ) : (
          <div className="quantity-controls">
            <button className="quantity-btn"onClick={handleDecrease}>
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn"onClick={handleIncrease}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;