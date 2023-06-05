import React from 'react';

import SeasonHit from '../../components/SeasonHit/SeasonHit';
import ShopProducts from '../../components/ShopProducts/ShopProducts';
import TitlePage from '../../components/TitlePage/TitlePage';
import Delivery from '../../components/Delivery/Delivery';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import Posts from '../../components/Posts/Posts';
import Brands from '../../components/Brands/Brands';
import Footer from '../../components/Footer/Footer';

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
