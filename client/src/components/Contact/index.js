import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";
import axios from "axios";

const ContactForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  }

  return (
    <div style={{ paddingBottom: "100vh" }}>
      <Container>
        <div
          style={{ marginTop: "3rem", padding: "2rem", border: "solid 2px" }}
        >
          <h3 className="text-white">
            Have any questions or comments? Get in touch with me here!
          </h3>
          <hr color="white" />
          <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <FormGroup>
              <Label for="name" className="text-white">
                Name
              </Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="Your Name and/or Company"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" className="text-white">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message" className="text-white">
                Your Message
              </Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>

            <Button type="submit" color="dark">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
