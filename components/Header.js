import Menu from '../components/Menu.js';

function Header() {
  const backgroundImage = '/assets/winter-1.jpg';
  return (
    <header style={{backgroundImage: `url(${backgroundImage})`}}>
      <h1 style={{fontSize: 'x-large'}}>Dwain Anderson :: Software Developer</h1>
      <Menu />
    </header>
  );
}
export default Header;

