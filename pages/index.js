import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PortfolioDeckOfCards from '../components/PortfolioDeckOfCards.js';

function Home() {
  const backgroundImage = '/assets/winter-8.jpg';
  return (
      <div className='main'> 
          <Header />
          <main className='home' style={{backgroundImage: `url(${backgroundImage})`}}> 
              <div className='project-gallery'>
                  <PortfolioDeckOfCards />
              </div>
          </main>
          <Footer />
      </div>
  );
}

export default Home;