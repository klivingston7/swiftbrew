import React, { Component } from "react";
import API from "../../utils/API"
import { Card, CardBody, CardTitle, Button} from 'reactstrap';


class BakeryCard extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      name: "",
      price: 0
    }
  }


  addToCart = () => {
    this.setState({
      name: this.props.product_name,
      price: this.props.daily
    },function(){
      API.addCoffeeToCart({
        product_name: this.state.name,
        size: "N/A",
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

        <p>${this.props.daily.toFixed(2)} <small>({this.props.dailyCal} cal)</small></p>

        <Button className="btn col-Btn" id="to-cart" role="button" value = {this.props._id} 
                onClick = {this.addToCart}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  )};

};

export default BakeryCard;
