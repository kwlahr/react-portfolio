import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

const StackCard = () => {
  return (
    <Container>
      <Card
        color="dark"
        className="mx-auto"
        style={{
          padding: "1rem",
          border: "solid 2px ",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <Row>
          <CardBody>
            <CardTitle className="text-white font-weight-bold">
              <h1>Technical Skills</h1>
            </CardTitle>
            <br />
            <CardSubtitle className="text-white">MERN Focus</CardSubtitle>
            <CardText className="mt-3 text-white">
              T-SQL | MySQL | Sequelize | C# | SSIS | SSMS | HTML5 | CSS | MS
              SQL Server | Azure | SSRS | SSAS | Profiler | Query Analyzer |
              SSDT | Materialize | Javascript | React | JQuery | Node.js |
              Express | Express-Handlebars | JawsDB | AWS | MongoDB | Mongoose |
              Git | Postman | Heroku | Agile Methodology | Visual Studio Code
            </CardText>
          </CardBody>
        </Row>
      </Card>
    </Container>
  );
};
export default StackCard;
