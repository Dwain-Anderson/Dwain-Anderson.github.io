function Hamburger({ toggleMenu, isOpen }) {
  return (
    <button
      id="hamburger-button"
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {/* Pure CSS bars — no image dependency */}
      <span className={`bar ${isOpen ? 'open' : ''}`} />
      <span className={`bar ${isOpen ? 'open' : ''}`} />
      <span className={`bar ${isOpen ? 'open' : ''}`} />
    </button>
  );
}
 
export default Hamburger;
 