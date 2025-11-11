import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext'; 
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { toggleTheme, theme } = useTheme();
  const { getTotalItemsCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/dashboard" className="logo">
        Кроссовочки.ру
      </Link>
      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-link" end>
          Главная
        </NavLink>
        <NavLink to="/catalog" className="nav-link">
          Каталог
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Корзина ({getTotalItemsCount()})
        </NavLink>
      </nav>
      <div className="header-actions">
        <div className="theme-switcher">
          <button onClick={toggleTheme}>
            <span role="img" aria-label="sun/moon">{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
        </div>
        {user ? (
          <>
            <span className="user-info">Привет, {user.name}</span>
            <button onClick={logout} className="logout-button">
              Выйти
            </button>
          </>
        ) : (
          <Link to="/login" className="auth-button">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;