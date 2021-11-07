import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  className, variant, children, handelClick = () => {},
}) => (
  <Button className={className} onClick={handelClick} variant={variant}>{children}</Button>
);

ButtonComponent.propTypes = {
  className: PropTypes.string,
  handelClick: PropTypes.func,
  children: PropTypes.string,
  variant: PropTypes.string,
};

ButtonComponent.defaultProps = {
  className: '',
  children: 'Button',
  variant: 'primary',
  handelClick: () => {},
};

export default ButtonComponent;
