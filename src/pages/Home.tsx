import React from 'react';
import SeasonHit from '../components/SeasonHit';
import ShopProducts from '../components/ShopProducts/ShopProducts';
import TitlePage from '../components/TitlePage';
import Delivery from '../components/Delivery';
import FeaturedProduct from '../components/FeaturedProduct';
import Posts from '../components/Posts';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <TitlePage />
      <Delivery />
      <SeasonHit />
      <FeaturedProduct />
      <ShopProducts />
      <Posts />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
