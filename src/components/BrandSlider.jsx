import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function BrandSlider({ brands }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const visibleBrands = [
    brands[currentSlide],
    brands[(currentSlide + 1) % brands.length],
    brands[(currentSlide + 2) % brands.length],
  ];

  return (
    <section className="brand-slider-section">
      <div className="brand-slider-header">
        <p className="brand-tag">Our Popular Stores</p>
        <h2>Featured Brands</h2>
      </div>

      <div className="brand-slider-wrapper">
        <button className="slider-btn left-btn" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="brand-slider-track">
          {visibleBrands.map((brand) => (
            <div className="brand-card" key={brand.name}>
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>

        <button className="slider-btn right-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="slider-dots">
        {brands.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? "dot active-dot" : "dot"}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

BrandSlider.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BrandSlider;