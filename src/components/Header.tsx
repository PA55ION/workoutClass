import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className='navbar_text'>
        <Navbar.Brand as={Link} to="/" className="brand">
          Workout
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/browse">
              Browse Content
            </Nav.Link>
            <Nav.Link as={Link} to="/current">
              Current Content
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
