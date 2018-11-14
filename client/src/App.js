import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainTabs from "./pages/MainTabs";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import OrderTemp from "./pages/OrderTemp";

const App = () => (
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
                <MainTabs type="signin" />
              </div>
            </div>
        </Route>
        <Route exact path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/orders" component={OrderTemp} />
      </Switch>
    </div>
  </Router>
);

export default App;
