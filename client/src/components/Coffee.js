import React, { Component } from "react";
import API from "../utils/API"
<<<<<<< HEAD
// import { Link } from "react-router-dom";

class Coffee extends Component {
  state = {
    coffee: [],
    id: "",
    name: "",
    picture: "",
    type: "",
    category: "",
    social: "",
    socialCal: "",
    daily: "",
    dailyCal: "",
    kick: "",
    kickCal: ""
  };

=======
import {Container, Row, Col} from 'reactstrap';
import ItemCard from '../components/ItemCard';

class Coffee extends Component {

  state = {
    coffee: [],
  };


>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
  componentDidMount() {
    this.loadCoffee();
  }

  loadCoffee = () => {
<<<<<<< HEAD

    API.getCoffee()
      .then(res =>
        // console.log(res.data)
        this.setState({
          coffee: res.data,
          id: "",
          name: "",
          picture: "",
          type: "",
          category: "",
          social: "",
          socialCal: "",
          daily: "",
          dailyCal: "",
          kick: "",
          kickCal: ""
        })
=======
    
    API.getCoffee()
      .then(res => {
        this.setState({coffee: res.data})
       }
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
      )
      .catch(err => console.log(err));
  };

<<<<<<< HEAD
  render() {
    return (
    <div>
      <header className="">
        <h1>Coffee</h1>
      </header>
      <hr />
      <div className="row">
        <div className="row">
          {this.state.coffee.map(coffee => (
            <div key={coffee.id}>{coffee.name}</div>
          ))}
        </div>
      </div>
    </div>
=======

  render() {
    return (
      <div>
        <Container>
          <header className="">
           <h1>Coffee</h1>
          </header>
          <hr />
          <Row>
              {this.state.coffee.map(coffee => (
                <Col sm = "6" key = {coffee._id}><ItemCard {...coffee}></ItemCard></Col>
              ))}
          </Row>
        </Container>
      </div>
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
    );
  }
}

export default Coffee;
