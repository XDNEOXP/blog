import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import './Footer.css';

const Footer = () => (
  <footer className="text-center text-lg-start bg-dark text-muted shadow-lg">
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Personal Website
            </h6>
            <p>
              There is some excellent general programming and software design stuff in here.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Languages
            </h6>
            <p>
              Java Script
            </p>
            <p>
              PHP
            </p>
            <p>
              C#
            </p>
            <p>
              SQL
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Frameworks and Libraries
            </h6>
            <p>
              React js
            </p>
            <p>
              Laravel
            </p>
            <p>
              Asp.Net
            </p>
            <p>
              Node js
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Contact
            </h6>
            <p>
              <i className="fas fa-home me-3" />
              {' '}
              <MdLocationOn />
              {' '}
              Semnan, Semnan, IR
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              <SiGmail />
              {' '}
              matrixpicker@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" />
              {' '}
              <a href="#!" className="text-reset">
                <AiFillGithub />
                Github
              </a>
            </p>
            <p>
              <i className="fas fa-print me-3" />
              {' '}
              <a href="#!" className="text-reset">
                <AiFillLinkedin />
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="text-center p-4" style={{ backgroundcolor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://www.com/">www.com</a>
    </div>
  </footer>
);

export default Footer;
