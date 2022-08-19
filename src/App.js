import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Home/Orders';
import Products from './components/Home/Products';
import Users from './components/Home/Users';
import Footer from './components/Share/Footer';
import Header from './components/Share/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
