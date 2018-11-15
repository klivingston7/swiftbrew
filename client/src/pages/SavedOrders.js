import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import SavedCard from "../components/SavedCard";

import { Container, Row, Col } from 'reactstrap';

class Cart extends Component {

  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }

  }

  componentDidMount() {
    this.loadOrders()
  }

  loadOrders = () => {

    API.getOrders()
      .then(res => {
        this.setState({
          orders: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  removeOrder = (e) => {
    e.preventDefault();

    API.removeOrder(e.target.id)
      .then(this.loadOrders)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <div style={{ margin: "40px 0 5px 0" }}>
            <h1 className="menuH">Saved Orders</h1>
          </div>
          <hr />
          <Row>
            {this.state.orders.map(orders =>
              (<Col sm="6" key={orders._id}>
                <SavedCard {...orders} />
              </Col>))}
          </Row>

        </Container>
      </div>
    )
  }
};

export default Cart;
