import React, { Component } from "react";
import API from "../../utils/API"
import { Card, CardBody, CardTitle, Table, Button} from 'reactstrap';
import "./Card.css";

import DropDown from './DropDown';

class itemCard extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      name: "",
      size: "",
      price: 0
    }
  }

  getSize = (sizeVal) => {
    this.setState({size: sizeVal}, function(){
      //this is where your price switch needs to go
      switch(sizeVal){
        case "Small":
          this.setState({price: this.props.social});
          break;
        case "Medium":
          this.setState({price: this.props.daily});
          break;
        case "Large":
          this.setState({price: this.props.kick});
          break;
        default:
          console.log("Error, please add size");
          break;
      }
    });
  }

  addToCart = () => {
    this.setState({
      name: this.props.product_name,
      size: this.state.size,
      price: this.state.price
    },function(){
      API.addCoffeeToCart({
        product_name: this.state.name,
        size: this.state.size,
        price: this.state.price
      })
      .catch(err => console.log(err));
    });
  
    }

  render(){

    return(
  
    <Card>
      <CardBody>
        <h2 className="cardH">{this.props.product_name}</h2>
        <img id="productPic" src={this.props.product_picture} alt = ""/>

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
              ${this.props.social.toFixed(2)} <small>({this.props.socialCal})</small></td>
            <td>
              ${this.props.daily.toFixed(2)} <small>({this.props.dailyCal})</small>
            </td>
            <td>
              ${this.props.kick.toFixed(2)} <small>({this.props.kickCal})</small>
            </td>
          </tr>
          </tbody>
        </Table>
        <DropDown getSize = {this.getSize}/>
        <Button className="btn col-Btn" id="to-cart" role="button" value = {this.props._id} 
                onClick = {this.addToCart}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  )};

};

export default itemCard;
