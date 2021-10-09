import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imgSrc, imgAlt }) => <img src={imgSrc} alt={imgAlt} />;

Image.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

Image.defaultProps = {
  imgSrc: '',
  imgAlt: 'No Image',
};

export default Image;
