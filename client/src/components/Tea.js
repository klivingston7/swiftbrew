import React, { Component } from "react";
import API from "../utils/API"
import {Container, Row, Col} from 'reactstrap';
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
        this.setState({tea: res.data})
       }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Container>
          <header className="">
           <h1>Tea</h1>
          </header>
          <hr />
          <Row>
              {this.state.tea.map(tea => (
                <Col sm = "6" key = {tea._id}><ItemCard {...tea}></ItemCard></Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tea;
