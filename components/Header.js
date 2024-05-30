import Menu from '../components/Menu.js';

function Header() {
  const backgroundImage = '/images/winter-1.jpg';
  return (
    <header style={{backgroundImage: `url(${backgroundImage})`}}>
      <h1>Dwain Anderson: Computer Science </h1>
      <Menu />
    </header>
  );
}
export default Header;

