import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import portfolios from './assets/data/portfolio.json'
import ResumePage from "./pages/Resume/index.js";
import Contact from "./pages/Contact/index.js";
// import '/assets';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path={["/", "/about", "/react-portfolio"]}>
              <About />
            </Route>

            <Route exact path="/portfolio">
              <Portfolio props={portfolios} />
            </Route>

            <Route exact path="/resume">
              <ResumePage />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
