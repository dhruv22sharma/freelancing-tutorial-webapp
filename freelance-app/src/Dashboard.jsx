import React, { Component } from "react";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Profile from "./Profile.jsx";
import Cart from "./Cart.jsx";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pro: 0
    };
  }

  getprofile = () => {
    if (this.state.pro === 0) {
      this.setState({ pro: this.state.pro + 1 });
    } else {
      this.setState({ pro: this.state.pro - 1 });
    }
  };
  render() {
    return (
      <div>
        <Header getprofile={() => this.getprofile()} />
        <div className="dashboard">
          <div className="content">
            <Banner />
          </div>
          {this.state.pro === 1 && <Profile />}
        </div>
        <Cart />
        <cartItems />
      </div>
    );
  }
}

export default Dashboard;
