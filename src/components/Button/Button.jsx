import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './Button.css';

const ButtonComponent = ({ variant, children, handelClick = () => {} }) => (
  <Button onClick={handelClick} variant={variant}>{children}</Button>
);

ButtonComponent.propTypes = {
  handelClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  variant: PropTypes.string,
};

ButtonComponent.defaultProps = {
  children: 'Button',
  variant: 'primary',
};

export default ButtonComponent;
