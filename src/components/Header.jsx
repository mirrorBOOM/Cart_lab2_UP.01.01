import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <NavLink to="/dashboard">Кроссовочки.ru</NavLink>
        </div>
        
        <div className="nav-links">
          <NavLink to="/dashboard" end>
            Главная
          </NavLink>
          <NavLink to="/catalog">
            Каталог
          </NavLink>
          <NavLink to="/cart">
            Корзина {getTotalItems() > 0 && `(${getTotalItems()})`}
          </NavLink>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '🌙' : '☀️'}
          </button>
          
          {user ? (
            <>
              <span className="user-name">Привет, {user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Выйти
              </button>
            </>
          ) : (
            <NavLink to="/login" className="login-btn">
              Войти
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;