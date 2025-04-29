import React, { useState } from 'react';

function AddProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    oldPrice: '',
    newPrice: '',
    image: '',
    category: 'nam',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      oldPrice: Number(formData.oldPrice),
      newPrice: Number(formData.newPrice),
    };
    onAdd(newProduct);
    setFormData({
      id: '',
      name: '',
      oldPrice: '',
      newPrice: '',
      image: '',
      category: 'nam',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', marginBottom: '40px' }}>
      <input
        type="text"
        name="id"
        placeholder="Mã sản phẩm"
        value={formData.id}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="text"
        name="name"
        placeholder="Tên sản phẩm"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="number"
        name="oldPrice"
        placeholder="Giá cũ"
        value={formData.oldPrice}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="number"
        name="newPrice"
        placeholder="Giá mới"
        value={formData.newPrice}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="text"
        name="image"
        placeholder="Link ảnh sản phẩm"
        value={formData.image}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      >
        <option value="nam">Nam</option>
        <option value="nữ">Nữ</option>
      </select>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Thêm sản phẩm
      </button>
    </form>
  );
}

export default AddProductForm;
