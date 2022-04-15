import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  return (
    <div className="nav-container">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand>Easy travel</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Signup">
            <Nav.Link>Sign-Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Signin">
            <Nav.Link>Log in</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Aboutus">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}
