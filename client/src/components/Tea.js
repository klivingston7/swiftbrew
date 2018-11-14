import React, { Component } from "react";
<<<<<<< HEAD
// import API from "../utils/API"
// import { Link } from "react-router-dom";

class Tea extends Component {
//   state = {
//     bakery: [],
//     id: "",
//     name: "",
//     picture: "",
//     type: "",
//     category: "",
//     social: "",
//     socialCal: "",
//     daily: "",
//     dailyCal: "",
//     kick: "",
//     kickCal: ""
//   };

//   componentDidMount() {
//     this.loadBakery();
//   }

//   loadbakery = () => {

//     API.getBakery()
//       .then(res =>
//         // console.log(res.data)
//         this.setState({
//           bakery: res.data,
//           id: "",
//           name: "",
//           picture: "",
//           type: "",
//           category: "",
//           social: "",
//           socialCal: "",
//           daily: "",
//           dailyCal: "",
//           kick: "",
//           kickCal: ""
//         })
//       )
//       .catch(err => console.log(err));
//   };

  render() {
    return (
    <div>
      <header className="">
        <h1>Tea</h1>
      </header>
      <hr />
      <div className="row">
        <div className="row">
          {/* {this.state.Bakery.map(bakery => (
            <div key={bakery.id}>{bakery.name}</div>
          ))} */}
        </div>
      </div>
    </div>
=======
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
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
    );
  }
}

<<<<<<< HEAD
export default Tea;
=======
export default Tea;
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
