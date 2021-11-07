import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imgSrc, imgAlt, imgClassName }) => (
  <img src={imgSrc} alt={imgAlt} className={imgClassName} />
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
