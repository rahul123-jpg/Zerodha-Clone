import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import Homepage from './Landing_page/home/Homepage';
import Signup from './Landing_page/Signup/Signup';
import Login from './Landing_page/Login/Login';
import AboutPge from './Landing_page/about/AboutPge';
import ProductsPage from './Landing_page/products/ProductsPage';
import PricingPage from './Landing_page/Pricing/PricingPage';
import SupportPage from './Landing_page/support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import Notfound from './Landing_page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      {/* Dashboard on PORT 3001 */}
      <Route path='/dashboard' element={<Navigate to="http://localhost:3001" />} />

      <Route path='/about' element={<AboutPge />} />
      <Route path='/product' element={<ProductsPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
