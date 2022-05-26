import React from 'react';
import Button from './partials/Button';
import Me from '../assets/images/me.png';
import HeaderSocial from './partials/HeaderSocial';
import { BsMouse } from 'react-icons/bs';

const Header = () => {
  return (
    <header id="home">
      <div className="container header">
        <h5>Hello I'm</h5>
        <h1>Kawsar Ahmed Fahad</h1>
        <h5 className="text-light">FrontEnd Developer</h5>

        <Button />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="This is faha" />
        </div>

        <a href="#contact" className="scroll_down">
          <BsMouse className="icon" /> <span>Scroll Down</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
