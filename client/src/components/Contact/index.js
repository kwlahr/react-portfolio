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

const ContactForm = props => {
  return (
    <div style={{ paddingBottom: "100vh" }}>
      <Container>
        <div
          style={{ marginTop: "3rem", padding: "2rem", border: "solid 2px" }}
        >
          <h3 className="text-white">
            Have any questions or comments? Get in touch with me here!
          </h3>
          <hr color="white"/>
          <Form>
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

            <Button color="dark">Submit</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
