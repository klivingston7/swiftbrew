import React, { Component } from 'react';
import Header from "../components/Header";
import Order from "../components/Order";

class OrderTemp extends Component {
  render() {
    return (
      <div className="Order">
        <Header />

        <Order />
      </div>
    );
  }
}

export default OrderTemp;