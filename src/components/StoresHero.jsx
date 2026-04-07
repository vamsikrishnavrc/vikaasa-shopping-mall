import React, { Component } from "react";
import "./StoresPage.css";

class StoresHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Stores",
    };
  }

  render() {
    return (
      <section className="stores-hero">
        <div className="stores-hero-overlay"></div>
        <div className="stores-hero-content">
          <h1>{this.state.title}</h1>
        </div>
      </section>
    );
  }
}

export default StoresHero;