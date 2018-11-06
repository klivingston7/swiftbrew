import React, { Component } from "react";
import { Card, CardBody, CardTitle, Table, Button} from 'reactstrap';
import API from "../../utils/API";

import DropDown from './DropDown';

class itemCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Coffee",
      size: "Small",
      price: "$2.00"
    }
  }

  addToCart(e){
    e.preventDefault();
    console.log("added!");


    API.addCoffeeToCart(this.state)
    

  }

  render(){

    return(
  
    <Card key = {this.props._id}>
      <CardBody>
        <h2>{this.props.product_name}</h2>
        {/* <img id="productPic" src={props.product_picture} alt = ""/> */}

        <CardTitle> {this.props.product_type} {this.props.product_category}</CardTitle>

        <Table className="table text-center">
          <tbody>
          <tr>
            <th>
              Small <small>(cal)</small>
            </th>
            <th>
              Medium <small>(cal)</small>
            </th>
            <th>
              Large <small>(cal)</small>
            </th>
          </tr>
          <tr>
            <td>
              ${this.props.social} <small>({this.props.socialCal})</small></td>
            <td>
              ${this.props.daily} <small>({this.props.dailyCal})</small>
            </td>
            <td>
              ${this.props.kick} <small>({this.props.kickCal})</small>
            </td>
          </tr>
          </tbody>
        </Table>
        <DropDown />
        <Button className="btn col-Btn" id="to-cart" role="button" value = {this.props._id} onClick = {this.addToCart}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  )};

};

export default itemCard;
