import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        It's <span>Faha</span>
      </div>

      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonial">testimonial</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="socials">
        <a href="https://bd.linkedin.com/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/faha1999" target="_blank">
          <BsGithub />
        </a>
        <a href="#" target="_blank">
          <BsDribbble />
        </a>
      </div>

      <div className="copyRight">
        <small>&copy; It's Faha. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
