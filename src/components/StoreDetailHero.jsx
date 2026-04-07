import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StoreDetailPage.css";

class StoreDetailHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.name,
    };
  }

  render() {
    const { heroImage, logoCard, categories } = this.props;

    return (
      <section
        className="store-detail-hero"
        style={{ backgroundImage: `linear-gradient(rgba(24,16,40,0.28), rgba(24,16,40,0.28)), url(${heroImage})` }}
      >
        <div className="store-detail-overlay"></div>

        <div className="store-detail-hero-content">
          <div className="store-logo-card">
            <img src={logoCard} alt={this.state.title} />
          </div>

          <h1>{this.state.title}</h1>
          <p>{categories.join(" • ")}</p>
        </div>
      </section>
    );
  }
}

StoreDetailHero.propTypes = {
  name: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  logoCard: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoreDetailHero;