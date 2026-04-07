import React, { Component } from "react";

class WelcomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "Lifestyle • Shopping • Experience",
    };
  }

  render() {
    return (
      <section className="hero">
        <div className="hero-bg hero-bg-1"></div>
        <div className="hero-bg hero-bg-2"></div>
        <div className="hero-bg hero-bg-3"></div>
        <div className="hero-grid"></div>
        <div className="hero-light"></div>

        <div className="hero-content">
          <p className="hero-top-text">{this.state.subtitle}</p>

          <h1 className="hero-title">
            <span className="title-line title-line-1">Welcome to</span>
            <span className="title-line title-line-2">Vikaasa Mall</span>
          </h1>

          <div className="hero-title-bar"></div>
        </div>
      </section>
    );
  }
}

export default WelcomeBanner;