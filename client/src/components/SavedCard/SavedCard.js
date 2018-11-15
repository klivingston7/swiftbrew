import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Table, Button} from 'reactstrap';
import API from '../../utils/API';

class SavedCard extends Component {

  constructor(props){
    super(props)

    this.state = {
      showDetails: false
    }

    this.addToCart = this.addToCart.bind(this)
    this.deleteSave = this.deleteSave.bind(this)
  }
  
  toggleDetails = (e) => {
    e.preventDefault();

    this.setState({showDetails: !this.state.showDetails})
    
  }

  addToCart = (e) => {
    e.preventDefault();

    this.props.items.forEach( item => {
      API.addCoffeeToCart(item)
      .catch(err => console.log(err));
    })
  }

  deleteSave = (e) => {
    e.preventDefault();

    API.removeOrder(e.target.id)
      .then(window.location.reload())
      .catch(err => console.log(err))

  }

  renderDetails() {

      return(
        <div>
            <Table>
            <thead>
              <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map( item =>
              <tr key = {item.product_name}>
                  <td>{item.product_name}</td>
                  <td>{item.size}</td>
                  <td>${item.price.toFixed(2)}</td>
              </tr>
              )}
            </tbody>
            </Table>
            <Button className={"ordBTN pad"} onClick = {this.addToCart}>Add to Cart</Button>
            <Button className={"ordBTN"} id = {this.props._id} onClick = {this.deleteSave}>Delete</Button>
        </div>
      )
  }

  render() {

    return(
      <Card>
        <CardBody>
          <CardTitle className={"orderName"} onClick = {this.toggleDetails}>{this.props.order_name}</CardTitle>
          {!this.state.showDetails ? <div></div> : this.renderDetails()}
        </CardBody>
      </Card>
    );
  }
}

export default SavedCard;