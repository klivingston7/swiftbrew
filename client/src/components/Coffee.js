import React, { Component } from "react";
import API from "../utils/API"
import { Row, Col } from 'reactstrap';
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
        this.setState({ coffee: res.data })
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (

      <div className="container-fluid">
        <header>
          <h1 className="menuH">Coffee</h1>
        </header>
        <br />
        <p className="menuP" style={{ textAlign: "center" }}>
          From americanos to cold brews we've got something delicious to fill your cup.
        </p>
        <hr />
        <Row>
          {this.state.coffee.map(coffee => (
            <Col sm="6" key={coffee._id}><ItemCard {...coffee}></ItemCard></Col>
          ))}
        </Row>
      </div>

    );
  }
}

export default Coffee;
