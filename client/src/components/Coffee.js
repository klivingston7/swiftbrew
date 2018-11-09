import React, { Component } from "react";
import API from "../utils/API"
import {Container, Row, Col} from 'reactstrap';
import ItemCard from '../components/ItemCard';

class Coffee extends Component {
  constructor(props){
    super(props)

    this.state = {
      coffee: [],
    };

  }

  componentDidMount() {
    this.loadCoffee();
  }

  loadCoffee = () => {
    
    API.getCoffee()
      .then(res => {
        this.setState({coffee: res.data})
       }
      )
      .catch(err => console.log(err));
  };


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
    );
  }
}

export default Coffee;
