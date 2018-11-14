import React from "react";
import "./SignIn.css";

const SignIn = () => (

    <div id="login">
        <h1>Welcome Back!</h1>

        <form action="/" method="post">
            <div className="field-wrap">
                <label>
                    Email Address
                            </label>
                <input type="email" required autocomplete="off" />
            </div>

            <div className="field-wrap">
                <label>
                    Password
                            </label>
                <input type="password" required autocomplete="off" />
            </div>

            <button className="button btn-block signIn-btn signIn-MAIN">Log In</button>
            <br />
            <div className="text-center OR">
                <p> OR </p>
            </div>
            {/* <!--Facebook--> */}
            <button type="button" className="btn btn-fb signIn-btn signIn-FB"><i className="fa fa-facebook"></i>
            </button>
            {/* <!--Twitter--> */}
            <button type="button" className="btn btn-tw signIn-btn signIn-TW"><i className="fa fa-twitter"></i>
            </button>
            {/* <!--Google--> */}
            <button type="button" className="btn btn-google signIn-btn signIn-GM"><i className="fa fa-google"></i>
            </button>
            {/* <!--Instagram--> */}
            <button type="button" className="btn btn-ins signIn-btn signIn-IG"><i className="fa fa-instagram"></i>
            </button>
        </form>
    </div>
);

export default SignIn;