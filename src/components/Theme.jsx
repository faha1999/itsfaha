import React, { useContext } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { themeContext } from '../Context';

const Theme = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div className="theme" onClick={handleClick}>
      <BiMoon />
      <BiSun className="icon" />

      <div
        className="button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default Theme;
