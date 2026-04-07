import React from "react";
import PropTypes from "prop-types";
import "./StoresPage.css";

function StoreCategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="store-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "store-tab active-store-tab" : "store-tab"}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

StoreCategoryTabs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default StoreCategoryTabs;