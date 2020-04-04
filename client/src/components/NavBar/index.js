import React, { useState } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto brand">
          Kyle Lahr
        </NavbarBrand>
        <NavLink href="https://github.com/kwlahr">
          <GitHubIcon fontSize="medium" className="gitHub" />
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/kyle-lahr-b2249b96/">
          <LinkedInIcon fontSize="medium" className="linkedIn" />
        </NavLink>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <Link to="/about" className="text-white">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" className="text-white">
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/resume" className="text-white">
                Resume
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
