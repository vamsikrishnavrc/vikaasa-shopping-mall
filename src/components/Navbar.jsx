import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ showDropdown: true });
  };

  handleMouseLeave = () => {
    this.setState({ showDropdown: false });
  };

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { logoSrc, logoAlt } = this.props;
    const { showDropdown } = this.state;

    return (
      <nav className="navbar">
        <div className="left-shape"></div>
        <div className="right-shape"></div>

        <div className="navbar-overlay"></div>

        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={this.handleScrollTop}>
              <img src={logoSrc} alt={logoAlt} />
            </Link>
          </div>

          <div className="navbar-links">
            

            <Link to="/stores" onClick={this.handleScrollTop}>
              Stores
            </Link>

          

            

            <div
              className="dropdown-wrapper"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <Link to="/happenings" className="has-dropdown" onClick={this.handleScrollTop}>
                Happenings <span className="dropdown-arrow">⌄</span>
              </Link>

              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/happenings/events" onClick={this.handleScrollTop}>
                    Events
                  </Link>
                  <Link to="/happenings/news-spotlight" onClick={this.handleScrollTop}>
                    News & Spotlight
                  </Link>
                  <Link to="/happenings/promotions-offers" onClick={this.handleScrollTop}>
                    Promotions & Offers
                  </Link>
                  
                </div>
              )}
            </div>
          </div>

          <div className="navbar-contact">
            <span className="contact-divider"></span>
            <Link to="/contact" onClick={this.handleScrollTop}>
              <HiOutlineMail className="mail-icon" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string
};

Navbar.defaultProps = {
  logoSrc:
    "https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg",
  logoAlt: "Vikaasa Mall logo"
};

export default Navbar;