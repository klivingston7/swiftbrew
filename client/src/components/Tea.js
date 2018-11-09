import React, { Component } from "react";
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
    );
  }
}

export default Tea;