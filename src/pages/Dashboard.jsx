import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="container dashboard-page">
      <h1>Добро пожаловать в наш магазин!</h1>
      {user && <p>Приятных покупок, {user.name}!</p>} 
    </div>
  );
}

export default DashboardPage;