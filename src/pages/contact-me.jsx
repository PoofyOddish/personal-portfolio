import * as React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "../components/contact-form";

/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * Contact Me Page
 */


export default function contactMe() {

  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">Contact Me</h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}

      <Container id='contactMe'>
          <p>
            Need to get in touch with me?
          </p>
          <p>
            As of right now, if you are reaching out for professional purposes, 
            please reach out to me via LinkedIn.
          </p>
          <p>
            Here's a form that you can one day fill out. It doesn't work right now, but you should still try it!
          </p>
          < ContactForm />
      </Container>
    </div>
  );
}
