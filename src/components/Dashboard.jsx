import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h1>Добро пожаловать в наш магазин!</h1>
        <p>Здесь вы найдёте лучшие товары по выгодным ценам</p>
        
        <div className="welcome-actions">
          <Link to="/catalog" className="welcome-btn primary">
            Перейти в каталог
          </Link>
          <Link to="/cart" className="welcome-btn secondary">
            Посмотреть корзину
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;