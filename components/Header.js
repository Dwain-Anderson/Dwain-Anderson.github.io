import Menu from './Menu.js';
 
function Header() {
  return (
    <header
      style={{ backgroundImage: 'url(/assets/winter-1.jpg)' }}
      aria-label="Site header"
    >
      <h1>Dwain Anderson <span className="header-title-role">· Software Developer</span></h1>
      <Menu />
    </header>
  );
}
 
export default Header;