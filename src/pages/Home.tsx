import React from 'react';
import SeasonHit from '../components/SeasonHit';
import ShopProducts from '../components/ShopProducts/ShopProducts';
import TitlePage from '../components/TitlePage';
import Delivery from '../components/Delivery';
import FeaturedProduct from '../components/FeaturedProduct';

const Home: React.FC = () => {
  return (
    <>
      <TitlePage />
      <Delivery />
      <SeasonHit />
      <FeaturedProduct />
      <ShopProducts />
    </>
  );
};

export default Home;
