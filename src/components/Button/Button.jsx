import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import './Button.css';

const ButtonComponent = ({ children, handelClick = () => {} }) => (
  <Button onClick={handelClick} variant="contained" color="primary">{children}</Button>
);

ButtonComponent.propTypes = {
  handelClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

ButtonComponent.defaultProps = {
  children: 'Button',
};

export default ButtonComponent;
