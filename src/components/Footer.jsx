import React from "react";
import logo from "../assets/Nav-Foot/hope_logo.png";
import "./styles/Footer.css";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-4">
            <img src={logo} alt="HOPE Logo" className="img-fluid mb-3" />
            <ul className="social list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/ngo.hope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/hope_charities_usa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://x.com/HOPE_CharityUSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UCDF8h6bqvh05QnuI_qcL0fg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
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
              <li>Food Security</li>
              <li>Ramadan Activities</li>
              <li>Qurbani/Udhiya</li>
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
              <li>Phone: +92-21-35069450 – 35071423</li>
              <li>Email: agboat@hope-ngo.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
