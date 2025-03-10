import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/Nav-Foot/hope_logo.png";
import "./styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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

  window.addEventListener("resize", handleResize);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="HOPE Logo" />
          </div>
        </Link>
        <ul
          className={`links ${menuOpen ? "open" : ""}`}
          style={{ top: navRef.current ? navRef.current.clientHeight : 0 }}
        >
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/whatwedo">What We Do</NavLink>
          </li>
          {/* <li>
            <NavLink to="/latest-news">Latest News</NavLink>
          </li> */}
          <li>
            <a href="https://www.hopecharityusa.org/latest-news" target="blank">Latest News</a>
          </li>
          <li>
            <NavLink to="/research">Research</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <li>
            <div className="donate-mobile">
              <a href="https://www.hopecharityusa.org/donate-today" target="blank">
                Donate Now
              </a>
            </div>
          </li>
        </ul>
        <div className={`donate ${menuOpen ? "open" : ""}`}>
          <a href="https://www.hopecharityusa.org/donate-today" target="blank">Donate Now</a>
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
