import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: "The North Face Thermoball ",
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
  ]

  return (
    <div className="App">
      <main className="container">
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;