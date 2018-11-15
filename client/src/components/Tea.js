import React, { Component } from "react";
import API from "../utils/API"
import { Row, Col } from 'reactstrap';
import ItemCard from '../components/ItemCard';

class Tea extends Component {

  state = {
    tea: [],
  };


  componentDidMount() {
    this.loadTea();
  }

  loadTea = () => {

    API.getTea()
      .then(res => {
        this.setState({ tea: res.data })
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (

      <div className="container-fluid">
        <header>
          <h1 className="menuH">Tea</h1>
        </header>
        <br />
        <p className="menuP" style={{ textAlign: "center" }}>
          Eveything from tea lattes to iced teas to perfectly brewed cups. Discover the breadth of
          handcrafted teas we offer.
        </p>
        <hr />
        <Row>
          {this.state.tea.map(tea => (
            <Col sm="6" key={tea._id}><ItemCard {...tea}></ItemCard></Col>
          ))}
        </Row>
      </div>

    );
  }
}

export default Tea;
