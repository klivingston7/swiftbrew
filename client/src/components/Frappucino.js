import React, { Component } from "react";
import API from "../utils/API"
import { Row, Col } from 'reactstrap';
import FrappCard from '../components/FrappCard';

class Frappucino extends Component {

  state = {
    frappucino: [],
  };

  componentDidMount() {
    this.loadFrappucino();
  }

  loadFrappucino = () => {

    API.getFrappucino()
      .then(res => {
        this.setState({ frappucino: res.data })
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (

      <div className="container-fluid">
        <header>
          <h1 className="menuH">Frappucino</h1>
        </header>
        <br />
        <p className="menuP" style={{ textAlign: "center" }}>
          Looking to try something a little different? Try one of our frappucinos. With
          names like Ultra Caramel, Triple Mocha, and Vanilla Bean you're sure to find
          something to satisfy your tastebuds.
        </p>
        <hr />
        <Row>
          {this.state.frappucino.map(frappucino => (
            <Col sm="6" key={frappucino._id}><FrappCard {...frappucino}></FrappCard></Col>
          ))}
        </Row>
      </div>

    );
  }
}

export default Frappucino;
