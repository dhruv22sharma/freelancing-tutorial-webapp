import React, { Component } from "react";
import logo from "./logo.png";
import "./Header_style.css";
class Header extends Component {
  state = {
    pro: true
  };

  render() {
    return (
      <div className="Navbar">
        <img src={logo} alt="logo" />
        <div className="Navbutton">
          <button>
            <i className="fa fa-address-book" />
            Contact Us
          </button>
          <button onClick={this.props.getprofile}>
            <i className="fa fa-user" />
            Profile
          </button>
          <button>
            <i className="fa fa-shopping-cart" />
            Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
