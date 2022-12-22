import React from 'react';
import Delivery from './components/Delivery';
import FeaturedProduct from './components/FeaturedProduct';
import Header from './components/Header';
import SeasonHit from './components/SeasonHit';
import TitlePage from './components/TitlePage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <TitlePage />
      <Delivery />
      <SeasonHit />
      <FeaturedProduct />
    </>
  );
};

export default App;
