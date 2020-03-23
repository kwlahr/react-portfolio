import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
import image from "../../assets/kyleheadshot.jpg";
import "./style.css";

const AboutCard = () => {
  return (
    <div style={{ paddingBottom: "100vh" }}>
      <Container>
        <Card color="dark" className="mx-auto" style={{ margin: "3rem" }}>
          <Row>
            <Col md="3">
              <CardImg
                className="image m-2"
                width="100%"
                src={image}
                alt="Card image cap"
              />
            </Col>
            <Col md="9">
              <CardBody>
                <CardTitle className="text-white font-weight-bold">
                  <h1>About Me</h1>
                </CardTitle>
                <CardSubtitle className="text-white">
                  Full-Stack Web Developer
                </CardSubtitle>
                <CardText className="mt-3 text-white">
                  Currently focusing in responsive front-end UI. As a developer,
                  I strive to connect people to the world around them in a fast
                  and intuitive way, allowing companies to reach their user base
                  in an engaging manner, and enabling users to take full
                  advantage of the potential of modern technology. Attending the
                  University of Denver Full-Stack Coding Bootcamp allowed me to
                  gain rigorous practice with several modern programming
                  languages while honing a sharp expertise in Javascript,
                  Node.js, MySQL, MongoDB, and their respective frameworks and
                  libraries. Recently, I have worked closely with a small team
                  of two other developers via Git to deploy a CRUD app in which
                  I was responsible for creating a pleasant mobile-first UI
                  utilizing HTML5, CSS3, and Bulma CSS framework, linking the
                  front-end to the back-end with JavaScript and
                  Express-Handlebars. My technical skills combined with my
                  passion for continued learning makes me an adaptable and
                  efficient addition to any development team.
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};
export default AboutCard;
