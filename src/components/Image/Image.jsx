import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imgSrc, imgAlt, imgClassName }) => (
  <img
    className={imgClassName}
    src={imgSrc}
    alt={imgAlt}
  />
);

Image.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgClassName: PropTypes.string,
};

Image.defaultProps = {
  imgSrc: '',
  imgAlt: 'No Image',
  imgClassName: '',
};

export default Image;
