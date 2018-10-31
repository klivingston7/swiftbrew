import React, { Component } from "react";
import API from "../utils/API"
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

  componentDidMount() {
    this.loadCoffee();
  }

  loadCoffee = () => {
    
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
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <header className="">
          <h1>Coffee</h1>
        </header>
        <hr />
        <div className="dropdown show">

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="/menu/coffee">
              Coffee
            </a>
            <a className="dropdown-item" href="/menu/frappucino">
              Frappucino
            </a>
            <a className="dropdown-item" href="/menu/tea">
              Tea
            </a>
            <a className="dropdown-item" href="/menu/bakery">
              Bakery
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="row">
            {this.state.coffee.map(coffee => (
              <div key = {coffee.id}>{coffee.name}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Coffee;
