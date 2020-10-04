import React, { Component } from "react";
import Header from "../header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Profile from "../profile/Profile";
import Cart from "../Cart/Cart";
import cartItems from "../Cartitems/cartitem";
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
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
