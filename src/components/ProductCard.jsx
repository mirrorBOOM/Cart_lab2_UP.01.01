// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
// import { useNavigate } from 'react-router-dom'; // Закомментируем

function ProductCard({ product }) {
  const { cart, addItem, incrementQuantity, decrementQuantity } = useCart();
  // const navigate = useNavigate();

  const itemInCart = cart.find(item => item.id === product.id);

  const handleAddToCart = () => {
    addItem(product);
    // Программный переход можно добавить здесь, если это нужно после добавления
    // if (window.confirm(`${product.name} добавлен в корзину! Перейти в корзину?`)) {
    //   navigate('/cart');
    // }
  };

  return (
    <div className="product-card">
      {product.image && <img src={product.image} alt={product.name} />} {/* Рендерим img только если есть image */}
      <h3>{product.name}</h3>
      <p className="price">{product.price} руб.</p>
      {itemInCart ? (
        <div className="quantity-controls">
          <button onClick={() => decrementQuantity(product.id)}>-</button>
          <span>{itemInCart.quantity}</span>
          <button onClick={() => incrementQuantity(product.id)}>+</button>
        </div>
      ) : null}
      <button onClick={handleAddToCart} className="add-to-cart-button">
        {itemInCart ? 'Добавить ещё' : 'В корзину'}
      </button>
    </div>
  );
}

export default ProductCard;