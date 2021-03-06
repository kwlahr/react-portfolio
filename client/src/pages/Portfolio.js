import React from "react";
import { Container, Row } from "reactstrap";
import PortfolioCard from "../components/PortfolioCard";
import portfolios from "../assets/data/portfolio.json";
export default function Portfolio() {
  return (
    <div style={{ paddingBottom: "100vh", paddingLeft: "1rem", paddingRight: "1rem" }}>
      <Container
        style={{
          marginTop: "3rem",
          padding: "2rem",
          border: "solid 2px",
          borderRadius: "5px",
          backgroundColor: "#343A40"
        }}
      >
        <h1 className="text-white">Portfolio</h1>
          <Row>
            {portfolios.map(portfolio => {
              return (
                <PortfolioCard
                  key={portfolio.id}
                  title={portfolio.title}
                  img={portfolio.img}
                  repo={portfolio.repo}
                  deployed={portfolio.deployed}
                  description={portfolio.description}
                />
              );
            })}
          </Row>
      </Container>
    </div>
  );
}
