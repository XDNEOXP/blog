import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="navbar navbar-dark bg-dark">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Stack spacing={2} direction="row">
          <Link to="/">
            <Button variant="outlined" color={pathname === '/' ? 'success' : 'primary'}>
              <AiFillHome className="navbar__icon" />
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outlined" color={pathname === '/about' ? 'success' : 'primary'}>
              <AiFillInfoCircle className="navbar__icon" />
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outlined" color={pathname === '/contact' ? 'success' : 'primary'}>
              <FaPhoneAlt className="navbar__icon" />
              Contact
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Header;
