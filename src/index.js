import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import Homepage from './Landing page/home/Homepage';
import Signup from './Landing page/Signup/Signup';
import AboutPge from './Landing page/about/AboutPge';
import ProductsPage from './Landing page/products/ProductsPage'
import PricingPage from './Landing page/Pricing/PricingPage';
import SupportPage from './Landing page/support/SupportPage';
import Navbar from './Landing page/Navbar';
import Footer from './Landing page/Footer';
import Notfound from './Landing page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Homepage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/about' element={<AboutPge/>}/>
    <Route path='/product' element={<ProductsPage/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
   <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
    <Footer/>
 </BrowserRouter>
);

