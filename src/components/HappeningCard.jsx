import React from "react";
import PropTypes from "prop-types";
import "./HappeningCard.css";

function HappeningCard({ image, alt, title, category, date, description, buttonText, onAction }) {
  return (
    <div className="happening-card">
      <div className="happening-card-image">
        <img src={image} alt={alt} />
      </div>

      <div className="happening-card-content">
        <span className="happening-card-category">{category}</span>
        <h2>{title}</h2>
        <p className="happening-card-date">{date}</p>
        <p className="happening-card-description">{description}</p>
        {/* <button className="happening-card-button" onClick={onAction}>
          // {buttonText}
        </button> */}
      </div>
    </div>
  );
}

HappeningCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onAction: PropTypes.func
};

HappeningCard.defaultProps = {
  alt: "Event image",
  buttonText: "Explore",
  onAction: () => {}
};

export default HappeningCard;