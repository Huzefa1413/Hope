import React from 'react';
import logo from '../assets/hope_logo.png';
import facebook from '../assets/facebook-svgrepo-com.svg';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="" />

        <ul className="social">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ul>
      </div>
      <div>
        <h3>Our Impact</h3>
        <ul>
          <li>Health Care</li>
          <li>Education</li>
          <li>Vocational Training</li>
          <li>Aqua Project</li>
          <li>Emergency Relief</li>
        </ul>
      </div>
      <div>
        <h3>Hope International</h3>
        <ul>
          <li>HOPE USA Activities</li>
          <li>HOPE USA Members</li>
          <li>HOPE UK Members</li>
          <li>HOPE UAE</li>
        </ul>
      </div>
      <div>
        <h3>Contact Info</h3>
        <ul>
          <li>Phone: +923352223102</li>
          <li>Email: hzefa@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
