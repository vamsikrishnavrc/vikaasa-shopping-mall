import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaShareAlt, FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";
import "./StoreDetailPage.css";

function ShareMenu({ social }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="share-menu-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="detail-icon-btn">
        <FaShareAlt />
      </button>

      <div className={open ? "share-popup show-share-popup" : "share-popup"}>
        <a href={social.facebook} target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href={social.whatsapp} target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href={social.twitter} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

ShareMenu.propTypes = {
  social: PropTypes.shape({
    facebook: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShareMenu;