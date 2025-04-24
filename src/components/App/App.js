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


import GreetingFunction from '../State/GreetingFunction'; // hoặc GreetingClass

function App() {
  return (
    <div>
      <GreetingFunction />
    </div>
  );
}

export default App;
