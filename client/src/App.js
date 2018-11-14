import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainTabs from "./pages/MainTabs";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
<<<<<<< HEAD
import Contact from "./pages/Contact";
import OrderTemp from "./pages/OrderTemp";
=======
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SavedOrders from "./pages/SavedOrders";
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b

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
<<<<<<< HEAD
        <Route exact path={"/signin"}>
=======
        <Route exact path={["/","/signin"]}>
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
            <div className="container text-center">
            <img class="mainImg" src="/media/CSB.png" alt="" />
              <div className="form">
                <MainTabs type="signin" />
              </div>
            </div>
        </Route>
        <Route exact path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
<<<<<<< HEAD
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/orders" component={OrderTemp} />
=======
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={SavedOrders} />
>>>>>>> 3ea9d3950461d894187238116a7df5f9cb5caa0b
      </Switch>
    </div>
  </Router>
);

export default App;
