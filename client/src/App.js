import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
