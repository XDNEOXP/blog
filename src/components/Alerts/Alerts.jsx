import React from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const ErrorAlert = ({ children }) => (
  <Alert variant="danger">{children}</Alert>
);

const SuccessAlert = ({ children, handelClose }) => (
  <Alert variant="success" dismissible onClose={handelClose}>{children}</Alert>
);

ErrorAlert.propTypes = {
  children: PropTypes.string,
};

SuccessAlert.propTypes = {
  handelClose: PropTypes.func.isRequired,
  children: PropTypes.shape([]),
};

ErrorAlert.defaultProps = {
  children: 'Error',
};

SuccessAlert.defaultProps = {
  children: 'Success',
};

export {
  ErrorAlert,
  SuccessAlert,
};
