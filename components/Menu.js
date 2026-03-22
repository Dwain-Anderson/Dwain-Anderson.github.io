import { useState } from 'react';
import Hamburger from './Hamburger.js';

const NAV_LINKS = [
  { label: 'Portfolio',   href: '/'           },
  { label: 'Resume',      href: '/assets/resume.pdf', external: true },
  { label: 'Coursework',  href: '/coursework' },
];

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="menu">
      <Hamburger toggleMenu={toggleMenu} isOpen={menuOpen} />

      <nav
        id="menu"
        className={menuOpen ? 'show' : ''}
        aria-label="Primary navigation"
      >
        <ul className="nav-list">
          {NAV_LINKS.map(({ label, href, external }) => (
            <li key={label} className="nav-item">
              <a
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;