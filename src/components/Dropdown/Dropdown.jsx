import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({ children }) => (
  <Dropdown className="mx-auto">
    <Dropdown.Toggle variant="dark" id="dropdown-basic" className="btn btn-dark nav-link mx-2 mt-1 p-2">
      Profile
    </Dropdown.Toggle>
    <Dropdown.Menu variant="dark">
      {children}
    </Dropdown.Menu>
  </Dropdown>
);

DropdownComponent.propTypes = {
  children: PropTypes.shape([]),
};

DropdownComponent.defaultProps = {
  children: '',
};

export default DropdownComponent;
