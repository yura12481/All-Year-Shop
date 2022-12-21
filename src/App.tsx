import React from 'react';
import Delivery from './components/Delivery';
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
    </>
  );
};

export default App;
