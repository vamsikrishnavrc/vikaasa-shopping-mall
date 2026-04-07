import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ExperienceCard({ title, description, className }) {
  return (
    <Link
      to="/stores"
      className={`experience-card ${className}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="experience-overlay"></div>
      <div className="experience-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default ExperienceCard;