import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import QRScanner from "../components/QRScanner";

import {Container, Row, Col, Card, CardBody, CardTitle, Table } from 'reactstrap';

class Checkout extends Component {

  state = {
    cart: []
  };

  componentDidMount() {
    this.loadCart()
  }

  loadCart = () => {
    
    API.getCart()
      .then(res => {
        this.setState({
          cart: res.data})
       }
      )
      .catch(err => console.log(err));
  };

  calculateTotal = (e) => {
    e.preventDefault();

    API.removeFromCart(e.target.id)
      .then(this.loadCart)
      .catch(err => console.log(err));
  };

  render(){
    return(
      <Container>
      <Header />
        <Row>
          <Col md = "6">
            <QRScanner />
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                  <CardTitle>Total: $1,000,000</CardTitle>
                  <Table>
                    <thead>
                      <tr>
                          <th>Product</th>
                          <th>Category</th>
                          <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.cart.map(cart =>(
                      <tr key = {cart._id}>
                          <td>{cart.product_name}</td>
                          <td>{cart.size}</td>
                          <td>{cart.price}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Checkout;