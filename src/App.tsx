import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Basket from './pages/Basket';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
};

export default App;
