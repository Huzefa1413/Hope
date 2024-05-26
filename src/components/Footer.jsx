import React from 'react';
import logo from '../assets/hope_logo.png';
import './styles/Footer.css';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-4">
            <img src={logo} alt="HOPE Logo" className="img-fluid mb-3" />
            <ul className="social list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" className="text-light">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" className="text-light">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" className="text-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com" className="text-light">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Our Impact</h5>
            <ul className="list-unstyled">
              <li>Health Care</li>
              <li>Education</li>
              <li>Vocational Training</li>
              <li>Aqua Project</li>
              <li>Emergency Relief</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Hope International</h5>
            <ul className="list-unstyled">
              <li>HOPE USA Activities</li>
              <li>HOPE USA Members</li>
              <li>HOPE UK Members</li>
              <li>HOPE UAE</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Phone: +923352223102</li>
              <li>Email: hzefa@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
