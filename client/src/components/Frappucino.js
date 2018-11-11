import React, { Component } from "react";
import API from "../utils/API"
import {Container, Row, Col} from 'reactstrap';
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
        this.setState({frappucino: res.data})
       }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Container>
          <header className="">
           <h1>Frappucino</h1>
          </header>
          <hr />
          <Row>
              {this.state.frappucino.map(frappucino => (
                <Col sm = "6" key = {frappucino._id}><FrappCard {...frappucino}></FrappCard></Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Frappucino;
