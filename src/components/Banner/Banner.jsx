import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="banner">
        <h1>The talent you need.</h1>
        <h1>The flexible you want.</h1>
        <p>One of the best place for</p>
        <p>student to learn and</p>
        <p>for teachers to teach.</p>
      </div>
    );
  }
}

export default Banner;
