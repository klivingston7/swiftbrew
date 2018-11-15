import React, { Component } from "react";
import API from "../utils/API"
import { Row, Col } from 'reactstrap';
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
        this.setState({ bakery: res.data })
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (

      <div className="container-fluid">
        <header>
          <h1 className="menuH">Bakery</h1>
        </header>
        <br />
        <p className="menuP" style={{ textAlign: "center" }}>
          Choose from baked goods that are thoughtfully crafted with high-quality ingredients and the
          oh-so-good taste you crave.
        </p>
        <hr />
        <Row>
          {this.state.bakery.map(bakedGood => (
            <Col sm="6" key={bakedGood._id}><BakeryCard {...bakedGood}></BakeryCard></Col>
          ))}
        </Row>
      </div>

    );
  }
}

export default Bakery;