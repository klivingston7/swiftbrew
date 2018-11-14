import React, { Component } from 'react';
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Header />

        <ContactForm />
      </div>
    );
  }
}

export default Contact;