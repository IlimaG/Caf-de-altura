import { Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { ProductsContextProvider } from './context/ProductsContext';

import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import ErrorPage from './pages/ErrorPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <ProductsContextProvider >
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<ShopPage />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Success" element={<Success />} /> 
            <Route path="*" element={<ErrorPage />} /> 
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
