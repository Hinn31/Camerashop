// import React from 'react';
// import NumberOne from './NumberOne'; 

// function App() {
//     const product = NumberOne();
//     console.log(product);
//     return (
//       <div className='App'>
//         <div className='container'>
//           <div className='row'>
//             <h2>{product.name}</h2>
//             <img src={product.image} alt={product.name} style={{ width: 200 }} />
//             <p>Giá: {product.price}đ</p>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default App;

// import Header from '../Header/Header';
// import Content from '../Content/Content';
// import RighContent from '../Content/RightContent';

// import Footer from '../Footer/Footer';
// // Đúng
// import { render } from '@testing-library/react';
// import './App.css';

// const One = () => {
//   return <div>Hello sir</div>
// }
// function App() {
//   return (
//     <div id="container">
//       <Header></Header>
//       <Content></Content>
//       <RighContent></RighContent>

//       <Footer></Footer>

//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import ProductList from '../ProductList';

// function App() {
//   return (
//     <div className="App">
//       <ProductList />
//     </div>
//   );
// }

// export default App;

//// State nhé : 

// import { State_one } from '../State/State_one'; // hoặc đường dẫn đúng đến file

// function App() {
//   return (
//     <div className="App">
//       <h1>Infomation</h1>
//       <State_one onSendData={(data) => console.log('Nhận từ con:', data)} />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Counter } from '../State//Counter'; // đúng đường dẫn

// function State() {
//   return (
//     <div className="State">
//       <h1>App Component</h1>
//       <Counter />
//     </div>
//   );
// }

// export default State;

// import React from 'react';
// import { Dientich_hcn } from '../State/Dientich_hcn';

// function App() {
//   return (
//     <div className="App">
//       <Dientich_hcn />
//     </div>
//   );
// }

// export default App;


// import CameraList from "../Content/CameraList";

// function App(){
//   return (
//     <div>
//       <CameraList></CameraList>
//     </div>
//   )
// }
// export default App;


// import GreetingFunction from '../State/GreetingFunction'; // hoặc GreetingClass

// function App() {
//   return (
//     <div>
//       <GreetingFunction />
//     </div>
//   );
// }

// export default App;

// import Add from "../Content/Add";
// import React from "react";
// import ProductList from "../Content/ProductList";

// function App() {
//   return (
//     <div className="App">
//       <h1>Quản lý Sản Phẩm</h1>
//       <ProductList/>
//       <Add />  {/* Gọi component Add */}
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import productsData from '../Content/data';
import AddProductForm from '../Content/AddProductForm';

function App() {
  const [products, setProducts] = useState(productsData);
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
    setShowForm(false);
  };

  const renderProducts = (category) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '40px' }}>
      {products
        .filter(product => product.category === category)
        .map(product => (
          <div key={product.id} style={{
            width: '200px',
            margin: '10px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            transition: 'transform 0.3s',
            textAlign: 'center',
            cursor: 'pointer',
          }}
            // onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            // onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h4 style={{ margin: '10px 0', fontSize: '16px', color: '#333' }}>{product.name}</h4>
              <p style={{ margin: '5px 0', fontSize: '14px', textDecoration: 'line-through', color: '#999' }}>
                {product.oldPrice.toLocaleString()}₫
              </p>
              <p style={{ margin: '5px 0', fontSize: '16px', color: '#e60023', fontWeight: 'bold' }}>
                {product.newPrice.toLocaleString()}₫
              </p>
            </div>
          </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={() => setShowForm(!showForm)}
        style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {showForm ? 'Đóng form' : 'Thêm sản phẩm mới'}
      </button>

      {showForm && <AddProductForm onAdd={handleAddProduct} />}

      <h2>Danh mục Nam</h2>
      {renderProducts('nam')}

      <h2>Danh mục Nữ</h2>
      {renderProducts('nữ')}
    </div>
  );
}

export default App;
