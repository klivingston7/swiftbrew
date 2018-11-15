import React from "react";
import { Link, BrowserRouter as Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Coffee from "../components/Coffee";
import Frappucino from "../components/Frappucino";
import Tea from "../components/Tea";
import Bakery from "../components/Bakery";


const Menu = (props) => (
  <div>
    <Header />
    <div className="container-fluid contMenu">
      <ul className="tab-group">
        <li className="tab">
          <Link
            to={`${props.match.url}/coffee`}
            href="#coffee"
            className={window.location.pathname === `${props.match.url}/coffee` ? "active" : ""}>
            Coffee
          </Link>
        </li>
        <li className="tab">
          <Link
            to={`${props.match.url}/frappucino`}
            href="#frappucino"
            className={window.location.pathname === `${props.match.url}/frappucino` ? "active" : ""}>
            Frappucino
          </Link>
        </li>
        <li className="tab">
          <Link
            to={`${props.match.url}/tea`}
            href="#tea"
            className={window.location.pathname === `${props.match.url}/tea` ? "active" : ""}>
            Tea
          </Link>
        </li>
        <li className="tab">
          <Link
            to={`${props.match.url}/bakery`}
            href="#bakery"
            className={window.location.pathname === `${props.match.url}/bakery` ? "active" : ""}>
            Bakery
          </Link>
        </li>
      </ul>

      <div className="tab-content" />
      <Switch>
        <Route exact path={`${props.match.url}/coffee`}>
          <Coffee />
        </Route>
        <Route exact path={`${props.match.url}/frappucino`}>
          <Frappucino />
        </Route>
        <Route exact path={`${props.match.url}/tea`}>
          <Tea />
        </Route>
        <Route exact path={`${props.match.url}/bakery`}>
          <Bakery />
        </Route>
      </Switch>

    </div>
  </div>

);

export default Menu;