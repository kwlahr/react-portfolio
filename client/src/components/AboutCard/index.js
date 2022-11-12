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
  Col,
} from "reactstrap";
import image from "../../assets/images/kyleheadshot.jpg";
import "./style.css";

const AboutCard = () => {
  return (
    <div>
      <Container>
        <Card
          color="dark"
          className="mx-auto"
          style={{ border: "solid 2px ", marginTop: "3rem", padding: "1rem" }}
        >
          <Row>
            <Col md="3">
              <CardImg
                className="image md-2"
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
                {/* <CardSubtitle className="text-white">
                  Full-Stack Software Developer
                </CardSubtitle> */}
                <CardText className="mt-3 text-white">
                  Full-Stack Software Developer with a focus in Database
                  Administration and a passion for constant learning. I strive to
                  connect people to the world around them in a fast and
                  intuitive way, allowing companies to reach their user base in
                  an engaging manner, and enabling users to take full advantage
                  of modern technology.
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
