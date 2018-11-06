import React, { Component } from "react";
import API from "../utils/API"
import {Container, Row, Col} from 'reactstrap';
import ItemCard from '../components/ItemCard';
import { Link } from 'react-router-dom';

class Coffee extends Component {
  state = {
    coffee: [],
    order: [],
  };

  componentDidMount() {
    this.loadCoffee();
  }

  loadCoffee = () => {
    
    API.getCoffee()
      .then(res => {
        this.setState({
          coffee: res.data,
        })
        console.log(this.state.coffee)
       }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm = "11">
              <h1>Coffee</h1>
            </Col>
            <Col>
              <Link to = "/checkout">Cart</Link>
            </Col>
          </Row>
          <Row>
              {this.state.coffee.map(coffee => (
                <Col sm = "6"><ItemCard {...coffee}></ItemCard></Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Coffee;
