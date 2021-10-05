import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <ul className="NavBar">
    <li>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </li>
    <li>
      <Link to="/about">
        <button type="button">About</button>
      </Link>
    </li>
    <li>
      <Link to="/contact">
        <button type="button">Contact</button>
      </Link>
    </li>
  </ul>
);

export default NavBar;
