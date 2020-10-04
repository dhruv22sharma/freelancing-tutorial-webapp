import React, { Component } from "react";
class cartItems extends Component {
  render() {
    return (
      <div className="cart-items">
        <div>
          <img src={this.props.imageurl} alt="" />
          <span>{this.props.name}</span>
        </div>
        <span>{this.props.price}</span>
        <div>
          <input type="number" />
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

export default cartItems;
