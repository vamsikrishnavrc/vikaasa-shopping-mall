import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer({ logoSrc, facebookUrl, instagramUrl, youtubeUrl }) {
  const handleTopNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-bg-overlay"></div>
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-logo-card"
              onClick={handleTopNavigation}
            >
              <img src={"https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg"} alt="Vikaasa Mall Logo" />
            </Link>

            <div className="footer-address">
              <div className="footer-icon-title">
                <FaMapMarkerAlt className="footer-location-icon" />
                <h3>Visit Us</h3>
              </div>
              <p>Door No. 15/23, Grand Trunk Road, Dargamitta</p>
              <p>Nellore, Andhra Pradesh 524003</p>

              <h2 className="footer-highlight">Feedback & Suggestions</h2>
              <h3 className="footer-contact-title">Contact</h3>
            </div>
          </div>

          <div className="footer-links-block">
            <h3>Important Links</h3>
            <Link to="/" onClick={handleTopNavigation}>About Vikaasa Mall</Link>
            <Link to="/stores" onClick={handleTopNavigation}>Stores Directory</Link>
            <Link to="/happenings" onClick={handleTopNavigation}>Events & Happenings</Link>
            <Link to="/careers" onClick={handleTopNavigation}>Careers</Link>
          </div>

          <div className="footer-links-block">
            <h3>Social</h3>

            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF /> Facebook
            </a>

            <a
              href={"https://www.instagram.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href={"https://www.youtube.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <Link to="/" onClick={handleTopNavigation}>Terms & Conditions</Link>
          <Link to="/" onClick={handleTopNavigation}>Privacy Policy</Link>
          <Link to="/" onClick={handleTopNavigation}>Cookies Policy</Link>
          <Link to="/" onClick={handleTopNavigation}>Site Map</Link>
          <Link to="/" onClick={handleTopNavigation}>Disclaimer</Link>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 © All Rights Reserved by Vikaasa Mall</p>
          <p>Designed with elegance for your mall experience</p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  logoSrc: PropTypes.string,
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  youtubeUrl: PropTypes.string
};

Footer.defaultProps = {
  logoSrc:
    "https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg",
  facebookUrl: "https://www.facebook.com/",
  instagramUrl: "https://www.instagram.com/",
  youtubeUrl: "https://www.youtube.com/"
};

export default Footer;