import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Header from './components/Header/Header.js';
import Products from './pages/Products/Products.js';
import Orders from './pages/Orders/Orders.js';
import Cart from './pages/Cart/Cart.js';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
