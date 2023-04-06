import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Basket from './pages/Basket';
import Home from './pages/Home';
import Delivery from './components/Delivery';
import NotFound from './pages/NotFound';
import ShopProducts from './components/ShopProducts/ShopProducts';
import FeaturedProduct from './components/FeaturedProduct';
import Posts from './components/Posts';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Delivery />} />
        <Route path="/shop" element={<ShopProducts />} />
        <Route path="/discounts" element={<FeaturedProduct />} />
        <Route path="/reviews" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
};

export default App;
