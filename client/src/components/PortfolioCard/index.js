import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardLink,
  CardBody,
  Col
} from "reactstrap";

export default function PortfolioCard({ img, title, repo, description }) {
  let imagePath = require(`../../assets/images/${img}`);
  return (
    <Card
      color="dark"
      className="md-4 text-white"
      style={{ margin: "2rem", border: "solid 2px ", padding: "1rem" }}
    >
      <CardHeader title={title}><h3>{title}</h3></CardHeader>
      <CardImg
        className="image md-2"
        style={{ width: "250px", height: "auto" }}
        src={imagePath}
        alt="Website Demo Image"
      />
      <CardLink className="text-white" style={{marginLeft: "10px"}} target="blank" href={repo}>
        GitHub Repo
      </CardLink>
      <CardBody style={{width: "250px"}}>{description}</CardBody>
    </Card>
  );
}
