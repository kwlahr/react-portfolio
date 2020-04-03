import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";

const StackCard = () => {
  return (
      <Container>
        <Card
          color="dark"
          className="mx-auto"
          style={{ padding: "1rem", border: "solid 2px ", marginTop: "2rem" }}
        >
          <Row>
            <CardBody>
              <CardTitle className="text-white font-weight-bold">
                <h1>Technical Skills</h1>
              </CardTitle>
              <CardSubtitle className="text-white" style={{textAlign: "center"}}>MERN Focus</CardSubtitle>
              <CardText className="mt-3 text-white" style={{textAlign: "center"}}>
                HTML5 | CSS | Bootstrap | Materialize | Javascript | React | JQuery |
                Node.js | Express | Express-Handlebars | JawsDB | AWS | MySQL |
                Sequelize | MongoDB | Mongoose | GitHub | Postman | Heroku |
                Agile Methodology | Visual Studio Code
              </CardText>
            </CardBody>
          </Row>
        </Card>
      </Container>
  );
};
export default StackCard;
