import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './pages/Products';
import ProductAvailability from './pages/ProductAvailability';
import Home from './pages/Home';
import StoreManager from './pages/StoreManager';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [sku, setSku] = useState(''); 
  const location = useLocation(); 

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/gerente" && <Header />}
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/produtos" element={<Products setSku={setSku} />} />
          <Route path="/product/:sku" element={<ProductAvailability />} />
          <Route path="/gerente" element={<StoreManager />} />  
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;