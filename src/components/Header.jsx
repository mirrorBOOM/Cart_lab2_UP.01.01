// src/components/Header.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { toggleTheme } = useTheme();
  const { getTotalItemsCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/dashboard" className="logo"> {/* Ссылка на Dashboard */}
        Кроссовочки.ру
      </Link>
      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-link" end>
          Главная
        </NavLink>
        <NavLink to="/catalog" className="nav-link"> {/* Каталог */}
          Каталог
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Корзина ({getTotalItemsCount()})
        </NavLink>
      </nav>
      <div className="header-actions">
        <div className="theme-switcher">
          <button onClick={toggleTheme}>
            <span role="img" aria-label="sun/moon">{localStorage.getItem('theme') === 'light' ? '🌙' : '☀️'}</span>
          </button>
        </div>
        {user ? ( // Если пользователь авторизован
          <>
            <span className="user-info">Привет, {user.name}</span>
            <button onClick={logout} className="logout-button">
              Выйти
            </button>
          </>
        ) : ( // Если не авторизован
          <Link to="/login" className="auth-button">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;