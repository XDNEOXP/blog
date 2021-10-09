import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import './About.css';

const About = () => (
  <div className="profilecard">
    <Avatar
      sx={{
        bgcolor: deepOrange[500], width: 150, height: 150, fontSize: 50, marginBottom: 5,
      }}
    >
      N
    </Avatar>
    <h4>Neo</h4>
    <p>FullStack Developer</p>
    <div className="profilecard__footer">
      <a href="#!" className="profilecard__icon gh">
        <AiFillGithub />
      </a>
      <a href="#!" className="profilecard__icon li">
        <AiFillLinkedin />
      </a>
      <a href="#!" className="profilecard__icon ig">
        <TiSocialInstagram />
      </a>
      <a href="#!" className="profilecard__icon tt">
        <TiSocialTwitter />
      </a>
    </div>
  </div>
);

export default About;
