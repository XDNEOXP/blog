import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import PropTypes from 'prop-types';
import './Button.css';

const ButtonComponent = ({ children, handelClick = () => {} }) => (
  <LoadingButton
    onClick={handleClick}
    endIcon={<SendIcon />}
    loading={loading}
    loadingPosition="end"
    variant="contained"
  >
    Send
  </LoadingButton>
);

ButtonComponent.propTypes = {
  handelClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

ButtonComponent.defaultProps = {
  children: 'Button',
};

export default ButtonComponent;
