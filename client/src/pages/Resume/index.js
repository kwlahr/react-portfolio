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
            <CardText>Denver, CO 80231</CardText>
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
              Full-Stack Software Developer with a focus in responsive front-end
              UI and a passion for constant learning. As a developer, I strive
              to connect people to the world around them in a fast and intuitive
              way, allowing companies to reach their user base in an engaging
              manner, and enabling users to take full advantage of modern
              technology.
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
              HTML5 | CSS | Materialize | Javascript | React | JQuery | Node.js
              | Express | Express-Handlebars | JawsDB | AWS | MySQL | Sequelize |
              MongoDB | Mongoose | GitHub | Postman | Heroku | Agile Methodology
              | Visual Studio Code
            </CardText>
            <CardText className="text-center">MERN Stack Focus</CardText>
            <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Projects</h3>
            </CardTitle>
            <CardTitle>
              <h4>Whiskey Journal</h4>
            </CardTitle>
            <CardLink
              href="http://whiskey-journal.herokuapp.com/"
              target="_blank"
              className="text-white"
            >
              http://whiskey-journal.herokuapp.com/
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
              <h4>Book Finder</h4>
            </CardTitle>
            <CardLink
              href="https://waterylime.github.io/Book-Finder/"
              target="_blank"
              className="text-white"
            >
              https://waterylime.github.io/Book-Finder/
            </CardLink>
            <CardText>
              <ul>
                <li>HTML5, CSS, Bulma, Javascript, JQuery</li>
                <li>
                  An application utilizing the Google Books API to recommend
                  books to users based on user-side input
                </li>
              </ul>
            </CardText>
            <hr color="white" />
            <CardTitle>
              <h4>Burger App</h4>
            </CardTitle>
            <CardLink
              href="https://kyle-burger-app.herokuapp.com/"
              target="_blank"
              className="text-white"
            >
              https://kyle-burger-app.herokuapp.com/
            </CardLink>
            <CardText>
              <ul>
                <li>
                  HTML5, CSS, Bootstrap, Bootswatch, Javascript, JQuery,
                  Express, Express-Handlebars, MVC Framework
                </li>
                <li>
                  A simple CRUD application that allows a user to create a
                  burger that will dynamically populate in the viewport and
                  change columns based on click events
                </li>
              </ul>
            </CardText>
            <CardTitle
              className="underlined text-center text-underlined"
              style={{ textDecoration: "underline" }}
            >
              <h3>Experience</h3>
            </CardTitle>
            <CardTitle>
              <h5>
                Freelance Musician |{" "}
                <span style={{ fontStyle: "italic" }}>2013 - Present</span>
              </h5>
            </CardTitle>
            <CardText>
              <ul>
                <li>Upright Bass, Electric Bass, Tuba, Guitar</li>
                <li>
                  Contracted musician for studio recordings, bluegrass, jazz,
                  rock, and event bands, as well as regional musical theater pit
                  orchestras throughout the country.
                </li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
