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

import React from 'react';
import ProductList from '../ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
