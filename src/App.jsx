// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import HomePage from './pages/Catalog'; // Каталог товаров
import CartPage from './pages/Cart';   // Корзина
import LoginPage from './pages/Login'; // Вход
import DashboardPage from './pages/Dashboard'; // Главная
import './App.css';

function App() {
  // Твой массив товаров
  const products = [
    {
      id: 1,
      name: "The North Face Thermoball",
      price: 7699,
      image: "https://superstep.ru/upload/resize_cache/iblock/55e/rrw6mkvskx5ttwjn304dzib7hizn7j14/2160_2160_1/NF0A5LWFR0G1.webp"
    },
    {
      id: 2,
      name: "PUMA RSX Hi",
      price: 13999,
      image: "https://superstep.ru/upload/resize_cache/iblock/65c/30vx7cjxxfz3arzr2iy0gbulg1pk4thc/2160_2160_1/PM39271808.webp"
    },
    {
      id: 3,
      name: "adidas NITEBALL",
      price: 17999,
      image: "https://superstep.ru/upload/resize_cache/iblock/bd6/wd39ptg9j6gxx2719cevyn9ydcnjnfvw/2160_2160_1/ADIG6142R00.webp"
    },
    {
      id: 4,
      name: "New Balance 1906",
      price: 27999,
      image: "https://superstep.ru/upload/resize_cache/iblock/a6d/wr4lzbaohfeweqcej0v24pft4cka2g1p/2160_2160_1/NBU1906RCO.webp"
    },
    {
      id: 5,
      name: "Nike Air Force 1",
      price: 12999,
      image: "https://superstep.ru/upload/resize_cache/iblock/3e5/59iwj95uf987xk01cc75d008xpvn8b2j/2160_2160_1/NKDD8959100.webp"
    }
  ];

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Header />
              <main className="container">
                <Routes>
                  {/* Главная страница "/" ведет на Dashboard */}
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  {/* Каталог доступен всем, передавать товары больше не нужно, т.к. они прямо в HomePage */}
                  <Route path="/catalog" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  {/* Для /register не делаем Route, так как у вас его нет в требовании и в App.jsx его не было */}
                  {/* Все остальные маршруты ведут на 404 */}
                </Routes>
              </main>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;