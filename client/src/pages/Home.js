import React, { Component } from 'react';
import Main from "../components/Main";
import Header from "../components/Header";


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />

        <Main />

      </div>
    );
  }
}

export default Home;