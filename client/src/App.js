import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
import NavBar from './components/NavBar/index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>

      <div>
        <NavBar />

        <Switch>
          <Route exact path={['/', '/about', '/react-portfolio']}>
            <About />
          </Route>

          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>

          <Route exact path='/resume'>
            <Resume />
          </Route>

          <Route exact path='/contact' >
            <Contact />
          </Route>

        </Switch>

      </div>
    </Router >

  );
}

export default App;
