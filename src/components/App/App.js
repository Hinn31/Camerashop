import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

import './App.css';
const One = () => {
  return <div>Hello sir</div>
}
function App() {
  return (
    <div id="container">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>

    </div>
  );
}

export default App;
