import React from 'react';
import logo from '../assets/hope_logo.png';
import './Component.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="links">
          <li>About Us</li>
          <li>What we do</li>
          <li>Achievements</li>
          <li>Research</li>
          <li>Contact Us</li>
        </ul>
        <div className="donate">
          <button>Donate Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
