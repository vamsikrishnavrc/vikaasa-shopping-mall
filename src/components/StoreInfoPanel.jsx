import React from "react";
import PropTypes from "prop-types";
import "./StoreDetailPage.css";

function StoreInfoPanel({ description, timingsWeekdays, timingsWeekends, floor }) {
  return (
    <section className="store-info-panel">
      <div className="store-about-block">
        <h2>About The Brand</h2>
        <p>{description}</p>
      </div>

      <div className="store-side-block">
        <h2>Store Timings</h2>
        <h4>Weekdays</h4>
        <p className="highlight-red">{timingsWeekdays}</p>

        <h4>Weekends & Public Holidays</h4>
        <p className="highlight-red">{timingsWeekends}</p>

        <h2 className="floor-heading">Floor</h2>
        <p className="highlight-red">{floor}</p>
      </div>
    </section>
  );
}

StoreInfoPanel.propTypes = {
  description: PropTypes.string.isRequired,
  timingsWeekdays: PropTypes.string.isRequired,
  timingsWeekends: PropTypes.string.isRequired,
  floor: PropTypes.string.isRequired,
};

export default StoreInfoPanel;