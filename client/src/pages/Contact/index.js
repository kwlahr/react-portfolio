// // import React from 'react';
// // import ContactForm from '../components/Contact';

// // export default function Contact() {

// //     return(
// //         <ContactForm/>
// //     );
// // }

import React from "react";
import emailjs from "emailjs-com";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

export default function Contact() {
  function sendEmail(e) {
    // e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_pzZuzcZZ",
        e.target,
        "user_fKFvllFvqmTBKUsMLao2D"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <div style={{ paddingBottom: "100vh" }}>
      <Container>
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            border: "solid 2px",
            borderRadius: "5px",
            backgroundColor: "#343A40"
          }}
        >
          <h3 className="text-white">
            Have any questions or comments? Get in touch with me here!
          </h3>
          <hr color="white" />
          <Form id="contact-form" onSubmit={sendEmail}>
            <FormGroup>
              <Label for="name" className="text-white">
                Name
              </Label>
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name and/or Company"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" className="text-white">
                Email
              </Label>
              <Input
                type="email"
                name="user_email"
                placeholder="example@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message" className="text-white">
                Your Message
              </Label>
              <Input type="textarea" name="message" />
            </FormGroup>

            <Button
              type="submit"
              value="Send"
              color="dark"
              style={{ border: "solid 1px" }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
