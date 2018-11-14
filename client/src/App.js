import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainTabs from "./pages/MainTabs";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// import API from "./utils/API.js";
export default class App extends Component {
  state = {
    loggedInUser:""
  }
  // handleFormSubmit = event => {
  //   console.log("Submitting");
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   API.login(this.state).then((response)=>{
  //       console.log(response)
  //       window.location.replace("/home")
  //   })
  // };
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={"/signup"}>
              <div className="container text-center">
                <img class="mainImg" src="/media/CSB.png" alt="" />
                <div className="form">
                  <MainTabs type="signup" />
                </div>
              </div>
            </Route>
            <Route exact path={"/signin"}>
              <div className="container text-center">
                <img class="mainImg" src="/media/CSB.png" alt="" />
                <div className="form">
                  <MainTabs type="signin" loggedInUser={this.state.loggedInUser} handleFormSubmit={this.handleFormSubmit}/>
                </div>
              </div>
            </Route>
            <Route exact path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </div>
      </Router>
    )
  }
}