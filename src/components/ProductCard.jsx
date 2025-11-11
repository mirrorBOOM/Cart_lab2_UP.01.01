import React from 'react';
import { useCart } from '../contexts/CartContext';

function ProductCard({ product }) {
  const { cart, addItem, incrementQuantity, decrementQuantity } = useCart();

  const itemInCart = cart.find(item => item.id === product.id);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-card">
      {product.image && <img src={product.image} alt={product.name} />} 
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