import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import QRCode from 'qrcode';

import {Container, Row, Col, Card, CardBody, CardTitle, Table, Button, Form, Input, Label } from 'reactstrap';

class Cart extends Component {

  state = {
    cart: [],
    checkoutClicked: false,
    qrUrl:'',
    orderName: ''
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

    this.setState({orderName: e.target.value})

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

      that.setState({
        qrUrl:url,
        checkoutClicked: true
      });
    });

    let cart = this.state.cart !== undefined ? this.state.cart : null;

    let orderData = {
      order_name: this.state.orderName,
      product_name1: cart[0].product_name,
      size1: cart[0].size,
      price1: cart[0].price,
      product_name2: cart[1] !== undefined  ? cart[1].product_name  : null,
      size2: cart[1]  !== undefined ? cart[1].size  : null,
      price2: cart[1] !== undefined ? cart[1].price  : null,
      product_name3: cart[2] !== undefined  ? cart[2].product_name  : null,
      size3: cart[2]  !== undefined ? cart[2].size  : null,
      price3: cart[2] !== undefined ? cart[2].price  : null,
      product_name4: cart[3] !== undefined  ? cart[3].product_name  : null,
      size4: cart[3]  !== undefined ? cart[3].size  : null,
      price4: cart[3] !== undefined ? cart[3].price  : null,
      product_name5: cart[4] !== undefined  ? cart[4].product_name  : null,
      size5: cart[4]  !== undefined ? cart[4].size  : null,
      price5: cart[4] !== undefined ? cart[4].price  : null,
      product_name6: cart[5] !== undefined  ? cart[5].product_name  : null,
      size6: cart[5]  !== undefined ? cart[5].size  : null,
      price6: cart[5] !== undefined ? cart[5].price  : null,
      product_name7: cart[6] !== undefined  ? cart[6].product_name  : null,
      size7: cart[6]  !== undefined ? cart[6].size  : null,
      price7: cart[6] !== undefined ? cart[6].price  : null,
      product_name8: cart[7] !== undefined  ? cart[7].product_name  : null,
      size8: cart[7]  !== undefined ? cart[7].size  : null,
      price8: cart[7] !== undefined ? cart[7].price  : null,
      product_name9: cart[8] !== undefined  ? cart[8].product_name  : null,
      size9: cart[8]  !== undefined ? cart[8].size  : null,
      price9: cart[8] !== undefined ? cart[8].price  : null,
      product_name10: cart[9] !== undefined  ? cart[9].product_name  : null,
      size10: cart[9]  !== undefined ? cart[9].size  : null,
      price10: cart[9] !== undefined ? cart[9].price  : null,
      product_name11: cart[10] !== undefined  ? cart[10].product_name  : null,
      size11: cart[10]  !== undefined ? cart[10].size  : null,
      price11: cart[10] !== undefined ? cart[10].price  : null,
      product_name12: cart[11] !== undefined  ? cart[11].product_name  : null,
      size12: cart[11]  !== undefined ? cart[11].size  : null,
      price12: cart[11] !== undefined ? cart[11].price  : null,
      product_name13: cart[12] !== undefined  ? cart[12].product_name  : null,
      size13: cart[12]  !== undefined ? cart[12].size  : null,
      price13: cart[12] !== undefined ? cart[12].price  : null,
      product_name14: cart[13] !== undefined  ? cart[13].product_name  : null,
      size14: cart[13]  !== undefined ? cart[13].size  : null,
      price14: cart[13] !== undefined ? cart[13].price  : null,
      product_name15: cart[14] !== undefined  ? cart[14].product_name  : null,
      size15: cart[14]  !== undefined ? cart[14].size  : null,
      price15: cart[14] !== undefined ? cart[14].price  : null,
      product_name16: cart[15] !== undefined  ? cart[15].product_name  : null,
      size16: cart[15]  !== undefined ? cart[15].size  : null,
      price16: cart[15] !== undefined ? cart[15].price  : null,
      product_name17: cart[16] !== undefined  ? cart[16].product_name  : null,
      size17: cart[16]  !== undefined ? cart[16].size  : null,
      price17: cart[16] !== undefined ? cart[16].price  : null,
      product_name18: cart[17] !== undefined  ? cart[17].product_name  : null,
      size18: cart[17]  !== undefined ? cart[17].size  : null,
      price18: cart[17] !== undefined ? cart[17].price  : null,
      product_name19: cart[18] !== undefined  ? cart[18].product_name  : null,
      size19: cart[18]  !== undefined ? cart[18].size  : null,
      price19: cart[18] !== undefined ? cart[18].price  : null,
      product_name20: cart[19] !== undefined  ? cart[19].product_name  : null,
      size20: cart[19]  !== undefined ? cart[19].size  : null,
      price20: cart[19] !== undefined ? cart[19].price  : null,
    };
    console.log(orderData)

    API.saveOrder(orderData)
      .catch(err => console.log(err));

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
                              <th>Size</th>
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
                  <Input type = "text" name="orderName" id="orderName" 
                    placeholder="Enter an order name (optional)" onBlur = {this.getOrderName}></Input>
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
                <img src = {this.state.qrUrl} 
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
