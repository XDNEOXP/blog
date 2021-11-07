import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import './About.css';
import Button from '../Button/Button';

const About = () => (
  <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-7">
        <div className="card p-3 py-4">
          <div className="text-center">
            <img alt="Profile" src="https://www.seekpng.com/png/full/966-9665493_my-profile-icon-blank-profile-image-circle.png" width="100" className="rounded-circle" />
          </div>
          <div className="text-center mt-3">
            <code className="bg-secondary p-1 px-4 rounded text-white">FullStack Developer</code>
            <h5 className="mt-4 mb-1">Neo</h5>
            <span>UI/UX Designer</span>
            <div className="px-4 mt-3">
              <p className="fonts">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <ul className="social-list">
              <a target="_blank" href="https://github.com/XDNEOXP" className="social-list__icon gh" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a target="_blank" href="https://www.linkedin.com/xdneoxp" className="social-list__icon li" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a target="_blank" href="https://www.instagram.com/xdneoxp" className="social-list__icon ig" rel="noreferrer">
                <TiSocialInstagram />
              </a>
              <a target="_blank" href="https://www.twitter.com/xdneoxp" className="social-list__icon tt" rel="noreferrer">
                <TiSocialTwitter />
              </a>
            </ul>
            <div className="buttons">
              <a target="_blank" href="https://www.wa.me/09100342630" className="btn btn-outline-primary px-4" rel="noreferrer">Message</a>
              <Link to="/contact">
                <Button variant="primary" className="px-4 ms-3">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
