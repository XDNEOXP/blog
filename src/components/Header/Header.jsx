import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoLogoWebComponent } from 'react-icons/io5';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <Button className="navbar-brand" variant="text">
          <IoLogoWebComponent className="navbar-brand__icon" />
        </Button>
      </Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item active">
              <Button className="nav-link" color="primary" variant={pathname === '/' ? 'outlined' : 'text'}>Home</Button>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item">
              <Button className="nav-link" color="primary" variant={pathname === '/about' ? 'outlined' : 'text'}>About</Button>
            </li>
          </Link>
          <Link to="/contact">
            <li className="nav-item">
              <Button className="nav-link" color="primary" variant={pathname === '/contact' ? 'outlined' : 'text'}>Contact</Button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
