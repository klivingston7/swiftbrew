import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

const MainTabs = (props) => (
  <div>
    <ul className="maintab-group">
      <li className="maintab">
        <Link
          to={`/signin`}
          href="#login"
          className={
            window.location.pathname === "/signin" ? "active" : ""
          }
        >
          Sign In
            </Link>
      </li>
      <li className="maintab">
        <Link
          to={`/signup`}
          href="#signup"
          className={
            window.location.pathname === "/signup" ? "active" : ""
          }
        >
          Sign Up
            </Link>
      </li>
    </ul>

    <div className="maintab-content" />
    {props.type === "signin" ? <SignIn /> : <SignUp />}

  </div>

);

export default MainTabs;