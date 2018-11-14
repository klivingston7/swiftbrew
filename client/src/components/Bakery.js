import React, { Component } from "react";
import API from "../utils/API"
import {Container, Row, Col} from 'reactstrap';
import BakeryCard from '../components/BakeryCard';

class Bakery extends Component {
  state = {
    bakery: [],
  };

  componentDidMount() {
    this.loadBakery();
  }

  loadBakery = () => {
    
    API.getBakery()
      .then(res => {
        this.setState({bakery: res.data})
       }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <header className="">
           <h1>Bakery</h1>
          </header>
          <hr />
          <Row>
              {this.state.bakery.map(bakedGood => (
                <Col sm = "6" key = {bakedGood._id}><BakeryCard {...bakedGood}></BakeryCard></Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bakery;