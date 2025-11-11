import React from 'react';
import { useCart } from '../contexts/CartContext';

function CartPage() {
  const { cart, removeItem, incrementQuantity, decrementQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container cart-page">
        <h2 className="page-title">Корзина</h2>
        <p style={{ textAlign: 'center' }}>Ваша корзина пуста.</p>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h2 className="page-title">Ваша корзина</h2>
      <ul className="cart-items">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              {item.image && <img src={item.image} alt={item.name} />} 
              <div className="cart-item-info">
                <span>{item.name}</span> - {item.price} руб.
              </div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <span>{item.price * item.quantity} руб.</span>
              <button onClick={() => removeItem(item.id)} className="remove-btn">Удалить</button> 
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Итого: {getTotalPrice()} руб.</h3>
        <button onClick={clearCart} className="clear-cart-btn">Очистить корзину</button>
      </div>
    </div>
  );
}

export default CartPage;