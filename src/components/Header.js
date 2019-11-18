import React from 'react';
import { Fade } from 'react-reveal';
import Logo from "./img/JohnLarson.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';
import myResume from '../John Larson Resume.pdf';

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
        <Fade delay={300}>
        <div className="icons">
            <a href="https://www.linkedin.com/in/johnjlarson/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-links"></FontAwesomeIcon>
            </a>
            <a href={myResume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFilePdf} size="2x" className="icon-links"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/ReformedDevGuy" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon-links"></FontAwesomeIcon>
            </a>
         </div>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
