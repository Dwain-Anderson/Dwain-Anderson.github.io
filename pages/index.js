import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PortfolioDeckOfCards from '../components/PortfolioDeckOfCards.js';

function Home() {
  return (
    <div className="main">
      <Header />
      <main aria-label="Portfolio projects">

        <div className="section-banner">
          <img src="/assets/winter-8.jpg" alt="" className="section-banner-img" />
          <h2 className="section-heading">Projects</h2>
        </div>

        <div className="section-inner">
          <PortfolioDeckOfCards />
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default Home;