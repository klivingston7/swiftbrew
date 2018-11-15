import React, { Component } from "react";
import API from "../../utils/API.js";
import "./SignIn.css";

export default class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    //     handleFacebook = event =>{
    //         event.preventDefault();
    //           API.facebook().then((response) =>{
    //               console.log(response)
    //               window.location.replace("/home")
    //           })
    //     }
    //     handleTwitter = event =>{
    //       event.preventDefault();
    //       API.twitter().then((response) =>{
    //           console.log(response)
    //           window.location.replace("/home")
    //       })
    //   }
    //   handleGoogle = event =>{
    //       event.preventDefault();
    //       API.google().then((response) =>{
    //           console.log(response)
    //           window.location.replace("/home")
    //       })
    //   }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        console.log("Name", name);
        console.log("Value", value);
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    //   handleFormSubmit = event =>{
    //     this.props.handleFormSubmit(this.state);
    // }
    handleFormSubmit = event => {
        console.log("Submitting");
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        API.login(this.state).then((response) => {
            console.log(response)
            window.location.replace("/home")
        })
    };
    render() {
        return (
            <div id="login">
                <h1 className="logH">Welcome Back!</h1>
                <form>
                    <div className="field-wrap">
                        <label>
                            Email Address
                            </label>
                    <input name="email" onChange={this.handleInputChange} type="email" required />
                    </div>

                    <div className="field-wrap">
                        <label>
                            Password
                            </label>
                        <input name="password" onChange={this.handleInputChange} type="password" required />
                    </div>

                    <button className="button btn-block signIn-btn signIn-MAIN" onClick={this.handleFormSubmit}>Log In</button>
                    <br />
                    <div className="text-center OR">
                        <p> OR </p>
                    </div>
                    {/* <!--Facebook--> */}
                    <button type="button" className="btn btn-fb signIn-btn signIn-FB" onClick={this.handleFacebook}><i className="fa fa-facebook"></i>
                    </button>
                    {/* <!--Twitter--> */}
                    <button type="button" className="btn btn-tw signIn-btn signIn-TW" onClick={this.handleTwitter}><i className="fa fa-twitter"></i>
                    </button>
                    {/* <!--Google--> */}
                    <button type="button" className="btn btn-google signIn-btn signIn-GM" onClick={this.handleGoogle}><i className="fa fa-google"></i>
                    </button>
                </form>
            </div>
        )
    }
}