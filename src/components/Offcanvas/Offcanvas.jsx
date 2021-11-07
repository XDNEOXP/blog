import React from 'react';
import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffcanvasComponent = ({
  show, handelClose, children, placement, title,
}) => (
  <Offcanvas placement={placement} show={show} onHide={handelClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>{title}</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      {children}
    </Offcanvas.Body>
  </Offcanvas>
);

OffcanvasComponent.propTypes = {
  show: PropTypes.bool,
  handelClose: PropTypes.func.isRequired,
  children: PropTypes.shape([]),
  placement: PropTypes.string,
  title: PropTypes.string,
};

OffcanvasComponent.defaultProps = {
  show: false,
  children: <p>Nothing yet</p>,
  placement: '',
  title: '',
};

export default OffcanvasComponent;
