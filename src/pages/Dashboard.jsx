// src/pages/DashboardPage.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="container dashboard-page">
      <h1>Добро пожаловать в наш магазин!</h1>
      <p>Здесь вы найдете лучшие товары по выгодным ценам</p>
      {user && <p>Приятных покупок, {user.name}!</p>} {/* Приветствие, если авторизован */}
    </div>
  );
}

export default DashboardPage;