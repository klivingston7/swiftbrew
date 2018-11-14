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
    );
  }
}

export default Coffee;
