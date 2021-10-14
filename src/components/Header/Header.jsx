import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWebComponent } from 'react-icons/io5';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Link to="/">
        <Navbar.Brand><IoLogoWebComponent /></Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Header;
