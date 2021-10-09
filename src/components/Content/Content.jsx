import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import Projects from '../Projects/Projects';
import './Content.css';

const Content = () => (
  <div className="content-box">
    <Slideshow />
    <Projects />
  </div>
);

export default Content;
