import React, { useState, useRef } from 'react';
import logo from '../assets/hope_logo.png';
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="HOPE Logo" />
        </div>
        <ul
          className={`links ${menuOpen ? 'open' : ''}`}
          style={{ top: navRef.current ? navRef.current.clientHeight : 0 }}
        >
          <li>About Us</li>
          <li>What we do</li>
          <li>Achievements</li>
          <li>Research</li>
          <li>Contact Us</li>
          <li>
            <div className="donate-mobile">
              <button>Donate Now</button>
            </div>
          </li>
        </ul>
        <div className={`donate ${menuOpen ? 'open' : ''}`}>
          <button>Donate Now</button>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            size="2x"
            color="white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
