import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PortfolioDeckOfCards from '../components/PortfolioDeckOfCards.js';
import '../styles/global.css';

function Home() {
  return (
    <div className="main">
      <Header />

      <main
        className="home"
        style={{ backgroundImage: 'url(/assets/winter-8.jpg)' }}
        aria-label="Portfolio projects"
      >
        <h2 className="portfolio-h2">Projects</h2>
        <PortfolioDeckOfCards />
      </main>

      <Footer />
    </div>
  );
}

export default Home;