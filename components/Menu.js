import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';


const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => { setMenuOpen(!menuOpen); };
    const resumeURL = '/assets/resume.pdf';
    return (
        <div className='menu'>
            <Hamburger toggleMenu={toggleMenu} />
            <nav id="menu" className={menuOpen ? 'show' : ''}>
                <ul className="nav-list">
                    <li className="nav-item"><Link href="/">Portfolio</Link></li>
                    <li className="nav-item"><Link href={resumeURL}>Resume</Link></li>
                    <li className="nav-item"><Link href="/coursework">Coursework</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Menu;


