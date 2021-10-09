import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const TextFieldComponent = ({ label, error, handelChange }) => (
  <TextField onChange={handelChange} id="standard-basic" label={label} variant="standard" error={error} />
);

const MultilineTextFieldComponent = ({ label, error, handelChange }) => (
  <TextField
    onChange={handelChange}
    id="filled-multiline-static"
    label={label}
    multiline
    rows={5}
    defaultValue=""
    variant="filled"
    error={error}
  />
);

TextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handelChange: PropTypes.func.isRequired,
};

MultilineTextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handelChange: PropTypes.func.isRequired,
};

export {
  TextFieldComponent,
  MultilineTextFieldComponent,
};
