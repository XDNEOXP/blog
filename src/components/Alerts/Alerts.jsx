import React from 'react';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';

const ErrorAlert = ({ children }) => (
  <Alert severity="error">{children}</Alert>
);

const SuccessAlert = ({ children }) => (
  <Alert severity="success">{children}</Alert>
);

ErrorAlert.propTypes = {
  children: PropTypes.string,
};

SuccessAlert.propTypes = {
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
