import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import QRScanner from "../components/QRScanner";

import {Container, Row, Col, Card, CardBody, CardTitle, Table, Button, Input } from 'reactstrap';

class Checkout extends Component {

  constructor(props){
    super(props)

    this.state = {
      cart: [],
      total: 0,
      change: -1,
      payOption: "none"
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.changeSwitch = this.changeSwitch.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.emptyCart = this.emptyCart.bind(this)
    this.calculateChange = this.calculateChange.bind(this)
    

  }
  

  componentDidMount() {
    this.loadCart()
  }

  loadCart = () => {
    
    API.getCart()
      .then(res => {
        this.setState({
          cart: res.data})
        this.calculateTotal()
        
       })
       
      .catch(err => console.log(err));
  };

  calculateTotal = () => {
    let sum = 0;

    this.state.cart.forEach( item => {
      sum += item.price;})

    this.setState({ total: sum.toFixed(2)})
  };

  changeSwitch(e){
    e.preventDefault();

    this.setState({payOption: e.target.value})
  }

  calculateChange(e){
    e.preventDefault();

    let change = e.target.value - this.state.total;

    this.setState({change:change})
  }

  emptyCart(e){
    e.preventDefault();
    
    API.removeAll()
      .then(res => {
        this.setState({cart:res.data},this.calculateTotal())
        })
      .catch(err => console.log(err));
  }



  renderSwitch(){
    switch(this.state.payOption){
      case 'cash':
        return(<div>
          <Row>
            <Input type = "number" name="calculateChange" id="calculateChange" 
              placeholder="Enter Amount" onBlur = {this.calculateChange}></Input>
          </Row>
          <Row>
          { this.state.change !== -1 ? <p>Change due: ${this.state.change.toFixed(2)}</p> : <p></p>}
          </Row>
          {/* this done button should be a print receipt option */}
          <Row>
            <Button onClick = {this.emptyCart}>Done</Button>
            <Button onClick = {this.changeSwitch} value = "none">Cancel</Button>
          </Row>
        </div>)
        break;
      case 'card':
        return(<div>
          <div>Coming soon!</div>
          <Button onClick = {this.changeSwitch} value = "none">Cancel</Button>
        </div>)
        break;
      case 'none':
        return(<div></div>)
        break;
      default:
        return(<p>Error</p>)
        break;
    }
  }

  render(){
    return(
      <div>
        <Header />
        <Container>
        
          <Row>
            <Col md = "6">
              <QRScanner />
              <Row>
                <Col md = "6" className = "text-center">
                  <Button onClick = {this.changeSwitch} value = {"cash"}>Pay with Cash</Button>
                </Col>
                <Col md = "6" className = "text-center">
                 <Button onClick = {this.changeSwitch} value = {"card"}>Pay with Card</Button>
                </Col>
              </Row>
              <Row>
                {this.renderSwitch()}
              </Row>
            </Col>
            <Col sm="6">
              <Card>
                <CardBody>
                    <CardTitle>Total: ${this.state.total}</CardTitle>
                    <Table>
                      <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.cart.length ?
                          this.state.cart.map(cart =>(
                          <tr key = {cart._id}>
                              <td>{cart.product_name}</td>
                              <td>{cart.size}</td>
                              <td>${cart.price.toFixed(2)}</td>
                          </tr>
                        )) : <tr></tr>}
                      </tbody>
                    </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default Checkout;