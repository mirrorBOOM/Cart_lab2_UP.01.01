import React, { createContext, useReducer, useContext } from 'react'; 

const CartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === 'add') {
    const existingItem = state.find(item => item.id === action.payload.id);
    if (existingItem) {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...state, { ...action.payload, quantity: 1 }];
  } else if (action.type === 'remove') {
    return state.filter(item => item.id !== action.payload.id);
  } else if (action.type === 'plus') {
    return state.map(item =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else if (action.type === 'minus') {
    return state.map(item =>
      item.id === action.payload.id
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    ).filter(item => item.quantity > 0);
  } else if (action.type === 'clear') {
    return [];
  } else {
    return state;
  }
};

const initialCartState = []; 

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const addItem = (product) => {
    dispatch({ type: 'add', payload: product });
  };
  const removeItem = (id) => {
    dispatch({ type: 'remove', payload: { id } }); 
  };

  const incrementQuantity = (id) => {
    dispatch({ type: 'plus', payload: { id } });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: 'minus', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'clear' });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, incrementQuantity, decrementQuantity, clearCart, getTotalPrice, getTotalItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};