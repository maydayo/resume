import React from "react";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";

const Contact = () => (
  <div id="contact" data-aos="fade-up" data-aos-offset="200">
    <ContactHeader />
    <ContactList />
  </div>
);

export default Contact;
