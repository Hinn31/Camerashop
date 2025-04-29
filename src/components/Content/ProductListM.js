import React from "react";

function ProductListM({ products }) {
  return (
    <div>
      <h2>Danh sách sản phẩm Thời trang Nữ</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Giá: {product.price} VND</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListM;
