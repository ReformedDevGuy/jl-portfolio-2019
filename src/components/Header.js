import React from 'react';
import { Fade } from 'react-reveal';
import Logo from "./img/JohnLarson.png";

const Header = props => {
  return (
    <header className="header">
      <div className="header-text">
        <Fade>
          <img src={Logo} alt="John Larson"></img>
        </Fade>
        <Fade delay={200}>
          <h1>Front End Web Developer</h1>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
