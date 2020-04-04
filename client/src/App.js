import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/index.js";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import portfolios from "./assets/data/portfolio.json";
import ResumePage from "./pages/Resume/index.js";
import Contact from "./pages/Contact/index.js";
// import '/assets';

function App() {
  return (
    <div className="wrapper">
      <Router basename="https://kwlahr.github.io/react-portfolio">
        <NavBar />
        <Switch>
          <Route
            exact
            path={["/", "/about", "react-portfolio"]}
            component={About}
          />

          <Route
            exact
            path="/portfolio"
            component={Portfolio}
            props={portfolios}
          />

          <Route exact path="/resume" component={ResumePage} />

          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
