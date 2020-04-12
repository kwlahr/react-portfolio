import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardLink,
  CardBody,
  Col,
  Container,
} from "reactstrap";

export default function PortfolioCard({
  img,
  title,
  repo,
  deployed,
  description,
}) {
  let imagePath = require(`../../assets/images/${img}`);
  return (
    <div>
      <Container>
        <Col>
          <Card
            color="dark"
            className="mx-auto text-white"
            style={{
              border: "solid 2px ",
              marginTop: "3rem",
              padding: "1rem",
              width: "18rem",
              height: "27rem",
            }}
          >
            <CardHeader title={title}>
              <h3>{title}</h3>
            </CardHeader>
            <CardImg
              className="image md-2"
              style={{ width: "250px", height: "auto" }}
              src={imagePath}
              alt="Website Demo Image"
            />
            <CardLink
              className="text-white"
              style={{ marginLeft: "1rem" }}
              target="blank"
              href={repo}
            >
              GitHub Repo
            </CardLink>
            <CardLink
              className="text-white"
              style={{ marginLeft: "1rem" }}
              target="blank"
              href={deployed}
            >
              Deployed App
            </CardLink>
            <CardBody style={{ width: "250px" }}>{description}</CardBody>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
