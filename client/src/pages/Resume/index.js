import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import "./style.css";

export default class Resume extends Component {
  render() {
    return (
      <Container
        className="resume-container"
        style={{ paddingBottom: "100vh" }}
      >
        <Card
          color="dark"
          className="mx-auto"
          style={{ border: "solid 2px ", marginTop: "3rem" }}
        >
          <CardHeader className="text-white text-center">
            <CardTitle>
              <h1>Kyle Lahr</h1>
            </CardTitle>
            <CardText>Denver, CO 80209</CardText>
            <CardText>Email: kwlahr@gmail.com</CardText>
          </CardHeader>
          <CardBody className="text-white" style={{ padding: "3rem" }}>
            <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Summary</h3>
            </CardTitle>
            <CardText>
              Full-Stack Software Developer with a focus in Azure based back-end
              development. My experience as the Back-End Developer and Database
              Administrator for Accutrend has sharpened my expertise in cloud
              based data processing utilizing tools such as SSMS, SSIS, and
              Azure Data Studio to develop, manage, and automate data flows for
              records from over 2300 sources. Attending The University of Denver
              Full-Stack Coding Bootcamp allowed me to gain rigorous practice
              with several modern programming languages with a focus in React,
              Javascript, Node.js, MySQL, MongoDB, and their respective
              frameworks and libraries.
            </CardText>
            <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Education</h3>
            </CardTitle>
            <CardTitle>
              <h5>
                University of Denver Full-Stack Coding Bootcamp |{" "}
                <span style={{ fontStyle: "italic" }}>
                  Certificate of Completion
                </span>
              </h5>
            </CardTitle>
            <CardText>
              DU Coding Bootcamp provides an intensive curriculum designed to
              prepare talented software developers for roles in the tech
              industry upon immediate completion of the course.
            </CardText>
            <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Technical Skills</h3>
            </CardTitle>
            <CardText className="text-center">
              T-SQL | MySQL | Sequelize | C# | SSIS | SSMS | HTML5 | CSS | MS
              SQL Server | Azure | SSRS | SSAS | Profiler | Query Analyzer |
              SSDT | Materialize | Javascript | React | JQuery | Node.js |
              Express | Express-Handlebars | JawsDB | AWS | MongoDB | Mongoose |
              Git | Postman | Heroku | Agile Methodology | Visual Studio Code
            </CardText>
            <CardText className="text-center">MERN Stack Focus</CardText>
            {/* <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Projects</h3>
            </CardTitle>
            <CardTitle>
              <h4>Whiskey Journal</h4>
            </CardTitle>
            <CardLink
              href="https://github.com/eric-gustafson1/whiskey-journal"
              target="_blank"
              className="text-white"
            >
              https://github.com/eric-gustafson1/whiskey-journal
            </CardLink>
            <CardText>
              <ul>
                <li>
                  HTML5, CSS, Bulma, Javascript, JQuery, Express, Handlebars,
                  MySQL, Sequelize, JawsDB, Heroku
                </li>
                <li>
                  A CRUD application allowing users to track whiskeys they’ve
                  tasted via form input utilizing a Bulma based user interface
                  that passes data into a MySQL database
                </li>
              </ul>
            </CardText>
            <hr color="white" />
            <CardTitle>
              <h4>React Weather App</h4>
            </CardTitle>
            <CardLink
              href="https://github.com/kwlahr/react-weather-app"
              target="_blank"
              className="text-white"
            >
              https://github.com/kwlahr/react-weather-app
            </CardLink>
            <CardText>
              <ul>
                <li>React, Reactstrap, gh-pages, OpenWeather API, Axios</li>
                <li>
                  A real time weather PWA bootstrapped with create-react-app
                  utilizing the OpenWeatherMap.org RESTful API
                </li>
              </ul>
            </CardText>
            <hr color="white" />
            <CardTitle>
              <h4>Burger App</h4>
            </CardTitle>
            <CardLink
              href="https://github.com/kwlahr/burger-app"
              target="_blank"
              className="text-white"
            >
              https://github.com/kwlahr/burger-app
            </CardLink>
            <CardText>
              <ul>
                <li>
                  HTML5, CSS, Bootstrap, Bootswatch, Javascript, JQuery,
                  Express, Express-Handlebars, MVC Framework
                </li>
                <li>
                  A CRUD application showcasing DOM manipulaiton and data
                  migration based on user side click events
                </li>
              </ul>
            </CardText> */}
            <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Work History</h3>
            </CardTitle>
            <CardTitle>
              <h4> Senior Backend Developer/SQL Developer</h4>{" "}
              <h5>
                Accutrend Data Corporation{" "}
                <span style={{ fontStyle: "italic" }}>10/2021 - present</span>
              </h5>
            </CardTitle>
            <CardText>
              <ul>
                <li>
                  Using tools such as SSIS and SSMS to automate ETL processes
                  from over 2300 sources
                </li>
                <li>
                  Designing SQL queries to pull and manage data from several
                  databases from physical servers to Azure cloud servers
                </li>
                <li>
                  Performing testing and quality analysis to troubleshoot
                  technical issues as they arise{" "}
                </li>
              </ul>
            </CardText>
            <CardTitle>
              <h4>SQL/ETL Developer</h4>{" "}
              <h5>
                Cigna{" "}
                <span style={{ fontStyle: "italic" }}>06/2019 - 10/2021</span>
              </h5>
            </CardTitle>
            <CardText>
              <ul>
                <li>
                  Maintaining SQL scripts indexes and complex queries for
                  analysis and extraction
                </li>
                <li>
                  Performing quality testing and assurance for SQL servers
                </li>
                <li>
                  Identified SQL statement with poor performance using the MS
                  performance Monitor and SQL Trace Tools
                </li>
                <li>
                  Developing stored procedures, triggers, views and
                  adding/modifying tables for data load, transformation and
                  extraction
                </li>
                <li>
                  Working with stakeholders, developers, and production teams
                  across units to identify business needs and solution options{" "}
                </li>
              </ul>
            </CardText>
            <CardTitle>
              <h4>SQL Developer</h4>{" "}
              <h5>
                Geico{" "}
                <span style={{ fontStyle: "italic" }}>05/2017 - 06/2019</span>
              </h5>
            </CardTitle>
            <CardText>
              <ul>
                <li>
                  Designing ETL processes and data pipelines to bring data from
                  various sources into a central data repository
                </li>
                <li>
                  Writing SQL queries against Snowflake; Developing scripts with
                  Unix, Python, etc. to Extract, Transform, and Load data
                </li>
                <li>
                  Complete software development lifecycle experience including
                  design, documentation, implementation, testing, and deployment{" "}
                </li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
