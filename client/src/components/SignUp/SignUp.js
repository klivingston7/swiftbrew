import React from "react";
import { Component } from "react";
import API from "../../utils/API.js";
// import "./SignUp.css";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ''
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    console.log("Submitting");
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.login(this.state).then((response)=>{
        console.log(response)
        window.location.replace("/signin")
    })
  };
  
  render() {
      return (

      <div id="signup">
        <h1 className="logH">Sign Up for Free</h1>

        <form action="/signup" method="post">
          <div className="top-row">
            <div className="field-wrap">
              <label className={
                window.location.pathname === "/signup" ? "" : "active"
              }>
                First Name
                              </label>
              <input type="text" name="firstName" onChange={this.handleInputChange} required autocomplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Last Name
                              </label>
              <input type="text" name="lastName" onChange={this.handleInputChange} required autocomplete="off" />
            </div>
          </div>

          <div className="field-wrap">
            <label>
              Email Address
                          </label>
            <input type="email" name="email" onChange={this.handleInputChange} required autocomplete="off" />
          </div>

          <div className="field-wrap">
            <label>
              Set A Password
                          </label>
            <input type="password" name="password" onChange={this.handleInputChange} required autocomplete="off" />
          </div>

          <button type="submit" className="button btn-block signIn-btn signIn-MAIN" onClick={this.handleFormSubmit}>Get Started</button>
        </form>
      </div>
    );
  }
}

export default SignUp;