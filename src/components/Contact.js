import React, { Fragment } from 'react';
import myResume from '../John Larson Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Contact = props => {
  return (
    <Fragment>
      <div className="resume">
      </div>
      <div className="contact">
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
      </div>
    </Fragment>
  );
};

export default Contact;
