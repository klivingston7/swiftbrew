import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainTabs from "./pages/MainTabs";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

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
      </Switch>
    </div>
  </Router>
);

export default App;
