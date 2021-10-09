/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../Image/Image';

const Slideshow = () => {
  const settings = {
    dots: true,
  };

  return (
    <div className="slideshow container">
      <Slider {...settings}>
        <div>
          <Image imgSrc="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png" altSrc="Exaple" />
        </div>
        <div>
          <Image imgSrc="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png" altSrc="Exaple" />
        </div>
        <div>
          <Image imgSrc="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png" altSrc="Exaple" />
        </div>
        <div>
          <Image imgSrc="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png" altSrc="Exaple" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
