import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';

import {Container, Row, Col, Card, CardBody, CardTitle, Table, Button } from 'reactstrap';

class Cart extends Component {

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

  removeFromCart = (e) => {
    e.preventDefault();

    API.removeFromCart(e.target.id)
      .then(this.loadCart)
      .catch(err => console.log(err));
  };

  render(){
    return(
      <Container>
        <header>
            <h1>Current Order</h1>
            <Link to = "/coffee">Back to Coffee</Link>
        </header>
        <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                    <CardTitle>Leadership Team</CardTitle>
                    <Table>
                      <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.cart.map(cart =>(
                        <tr key = {cart._id}>
                            <td>{cart.product_name}</td>
                            <td>{cart.size}</td>
                            <td>{cart.price}</td>
                            <td><Button id = {cart._id} onClick = {this.removeFromCart}>X</Button></td>
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

export default Cart;
