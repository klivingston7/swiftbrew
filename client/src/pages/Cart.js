import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import QRCode from 'qrcode';

import {Container, Row, Col, Card, CardBody, CardTitle, Table, Button, Form, Input, Label } from 'reactstrap';

class Cart extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      cart: [],
      checkoutClicked: false,
      qrUrl:'',
      orderName: ''
    }

    this.renderQR = this.renderQR.bind(this);
    this.getOrderName = this.getOrderName.bind(this);
  }

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

  getOrderName = (e) => {
    e.preventDefault();

    console.log("something is happening")
    this.setState({orderName: e.target.value}, console.log(this.state.orderName))

  }

  renderQR = (e) => {
    e.preventDefault();
    
    const opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      rendererOpts: {
        quality: 0.3
      }
    }

    const qrURL = "https://localhost:3000/checkout";

    const that = this;

    //this still doesn't work there's some issues with async
    QRCode.toDataURL(qrURL, opts, function (err, url) {
      if (err) throw err

      console.log(url);
      that.setState({
        qrUrl:url,
        checkoutClicked: true
        
      },console.log(that.state));
    })

  }

  render(){
    return(
      <div>
        <Header />
        <Container>
          
          <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                      <CardTitle>Your Order</CardTitle>
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
                              <td>${cart.price.toFixed(2)}</td>
                              <td><Button id = {cart._id} onClick = {this.removeFromCart}>X</Button></td>
                          </tr>
                        ))}
                        </tbody>
                      </Table>
                  </CardBody>
                </Card>
            </Col>
          </Row>
          <Row>
              <Col md = "12" className = "justify-content-center">
                <Form>
                  <Label for="orderName">Save your order for easy checkout next time!</Label>
                  <br/>
                  <br/>
                  <Input type = "text" name="orderName" id="orderName" placeholder="Enter an order name (optional)" onBlur = {this.getOrderName}></Input>
                </Form>
              </Col>
          </Row>
          <Row>
            <Col md="6" className = "text-center">
              <Button onClick = {this.renderQR}>Checkout!</Button>
            </Col>
            <Col md="6" id = "QRlocation" className = "justify-content-center">
              { this.state.checkoutClicked ? 
              <div>
                <h4>Save this QR Code and show to the cashier at checkout!</h4>
                <img src = "data:image/jpeg;base64,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" 
                alt = "QR Code"/>
              </div> : ''}
              
            </Col>
          </Row>
          
        </Container>
      </div>
    )
  }
};

export default Cart;
