import React, { Component } from "react";
import API from "../utils/API"
import {Container, Row, Col} from 'reactstrap';
import ItemCard from '../components/ItemCard';

class Coffee extends Component {
  state = {
    coffee: [],
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
            <h1>Coffee</h1>
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
