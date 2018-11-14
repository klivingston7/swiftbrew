import React from "react";
import "./ContactForm.css";

const Contact = props => (
    <div>
        <div className="container">
            <header className="">
                <h1>
                    Contact
        </h1>
            </header>
            <hr />
            <div className="container">
                <div className="row">

                    <form className="col-sm-12" action="https://formspree.io/shelbydix1@gmail.com" method="POST">
                        <div className="form-group">
                            <label className="control-label col-sm-2" id="fname" for="fname">Name</label>
                            <div className="form-text">
                                <input type="txt" id="Fname" name="fullname" placeholder="Michael Scott" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" id="email" for="email">Email</label>
                            <div className="form-text">
                                <input type="email" id="Email" name="email" placeholder="m.scott@dundermifflin.com" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" id="message" for="msg">Message</label>
                            <div className="form-text">
                                <textarea name="Message" id="Message"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2">
                                <input className="btn car-Btn" type="submit" value="Submit" />
                                <input type="hidden" name="_next" value="https://swiftbrew.herokuapp.com/home" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <br />
        </div>
    </div>
);
export default Contact;