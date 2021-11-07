import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWebComponent } from 'react-icons/io5';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';
import Bookmarks from '../Bookmarks/Bookmarks';
import Dropdown from '../Dropdown/Dropdown';
import Settings from '../Settings/Setting';

const Header = () => (
  <Navbar className="sticky-top shadow-lg" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Link to="/">
        <Navbar.Brand><IoLogoWebComponent /></Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="btn btn-dark nav-link mx-2 mt-1">
            Home
          </Link>
          <Link to="/about" className="btn btn-dark nav-link mx-2 mt-1">
            About
          </Link>
          <Link to="/contact" className="btn btn-dark nav-link mx-2 mt-1">
            Contact
          </Link>
          <Dropdown>
            <Bookmarks />
            <Settings />
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Header;
