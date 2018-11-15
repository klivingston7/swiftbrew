import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainTabs from "./pages/MainTabs";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SavedOrders from "./pages/SavedOrders";
import Contact from "./pages/Contact";


export default class App extends Component {
  state = {
    loggedInUser: ""
  }

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
            <Route exact path={["/", "/signin"]}>
              <div className="container text-center">
                <img class="mainImg" src="/media/CSB.png" alt="" />
                <div className="form">
                  <MainTabs type="signin" loggedInUser={this.state.loggedInUser} handleFormSubmit={this.handleFormSubmit} />
                </div>
              </div>
            </Route>
            <Route exact path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={SavedOrders} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
};
