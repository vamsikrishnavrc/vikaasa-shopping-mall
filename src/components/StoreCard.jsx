import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./StoresPage.css";

function StoreCard({ id, name, image, categories }) {
  return (
    <Link to={`/stores/${id}`} className="store-card-link">
      <div className="store-card">
        <div className="store-card-image">
          <img src={image} alt={name} />
        </div>

        <div className="store-card-content">
          <span className="store-card-badge">{categories.join(" • ")}</span>
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

StoreCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoreCard;