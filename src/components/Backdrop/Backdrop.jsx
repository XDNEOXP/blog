import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const BackdropComponent = ({ open }) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

BackdropComponent.propTypes = {
  open: PropTypes.bool,
};

BackdropComponent.defaultProps = {
  open: false,
};

export default BackdropComponent;
