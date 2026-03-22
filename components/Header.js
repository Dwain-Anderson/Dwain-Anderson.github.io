import Menu from './Menu.js';

function Header() {
  return (
    <header aria-label="Site header">
      <h1>
        Dwain Anderson{' '}
        <span className="header-title-role">· Software Developer</span>
      </h1>
      <Menu />
    </header>
  );
}

export default Header;