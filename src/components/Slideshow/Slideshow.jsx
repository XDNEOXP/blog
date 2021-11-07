import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../Image/Image';

const Slideshow = () => (
  <Carousel>
    <Carousel.Item>
      <Image
        imgClassName="d-block w-100"
        imgSrc="https://www.teahub.io/photos/full/100-1001831_ultra-hd-pc-desktop-wallpaper-4k.jpg"
        imgAlt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        imgClassName="d-block w-100"
        imgSrc="https://www.teahub.io/photos/full/100-1001831_ultra-hd-pc-desktop-wallpaper-4k.jpg"
        imgAlt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        imgClassName="d-block w-100"
        imgSrc="https://www.teahub.io/photos/full/100-1001831_ultra-hd-pc-desktop-wallpaper-4k.jpg"
        imgAlt="First slide"
      />
      <Carousel.Caption>
        <h3>Third slide </h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slideshow;
