import React from "react";
// import "./SignUp.css";

const SignUp = () => (

  <div id="signup">
    <h1>Sign Up for Free</h1>

    <form action="/" method="post">
      <div className="top-row">
        <div className="field-wrap">
          <label className={
            window.location.pathname === "/signup" ? "" : "active"
          }>
            First Name
                          </label>
          <input type="text" required autocomplete="off" />
        </div>

        <div className="field-wrap">
          <label>
            Last Name
                          </label>
          <input type="text" required autocomplete="off" />
        </div>
      </div>

      <div className="field-wrap">
        <label>
          Email Address
                      </label>
        <input type="email" required autocomplete="off" />
      </div>

      <div className="field-wrap">
        <label>
          Set A Password
                      </label>
        <input type="password" required autocomplete="off" />
      </div>

      <button type="submit" className="button btn-block signIn-btn signIn-MAIN">Get Started</button>
    </form>
  </div>
);

export default SignUp;