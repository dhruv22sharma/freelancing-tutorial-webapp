import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="main_footer">
        <hr />
        <div className="Footer">
          <div className="Footer_logo">
            <img src={require("./images/footer_logo.png")} alt="Footer Logo" />
            <p>Freelancing Radiant</p>
          </div>
          <div className="social_media">
            <a href="https://twitter.com/?lang=en">
              <img src={require("./images/Twitter.png")} alt="Twitter logo" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={require("./images/facebook.png")} alt="Facebook logo" />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en">
              <img src={require("./images/instagram.png")} alt="Instagram logo" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={require("./images/youtube.png")} alt="Youtube logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
