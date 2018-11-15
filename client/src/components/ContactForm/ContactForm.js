import React from "react";
import "./ContactForm.css";

const Contact = props => (
    <div>
        <div className="container">
            <header>
                <h1 className="menuH">
                    Contact
        </h1>
            </header>
            <hr />
            <div className="container">
                <div className="row">
                    <form className="col-sm-12" action="action_page.php">
                        <div className="form-group NEM">
                            <label className="control-label col-sm-2" id="fname" for="fname">Name</label>
                            <div className="form-text">
                                <input type="txt" id="Fname" name="fullname" placeholder="Michael Scott" />
                            </div>
                        </div>
                        <div className="form-group NEM">
                            <label className="control-label col-sm-2" id="email" for="email">Email</label>
                            <div className="form-text">
                                <input type="email" id="Email" name="email" placeholder="m.scott@dundermifflin.com" />
                            </div>
                        </div>
                        <div className="form-group NEM">
                            <label className="control-label col-sm-2" id="message" for="msg">Message</label>
                            <div className="form-text">
                                <textarea name="Message" id="Message"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2">
                                <input className="btn con-Btn" type="submit" value="Submit" />
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