import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img
              src={product.avatar || 'https://via.placeholder.com/150'}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            {product.description && <p>{product.description}</p>}
            {product.price && <p className="price">{product.price} VND</p>}
            {product.quantity && <p>Số lượng: {product.quantity}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
