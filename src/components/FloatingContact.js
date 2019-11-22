import React from 'react';
import myResume from '../John Larson Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {  faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FloatingContact = props => {
  return (
    
    <div className="icon-floats">
      <div>
        <a href="mailto:john@jjlarson.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="contact-me-button-alt"></FontAwesomeIcon>
        </a>
        </div><div>
        <a href="https://www.linkedin.com/in/johnjlarson/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="contact-me-button"></FontAwesomeIcon>
        </a>
        </div><div>
        <a href="https://github.com/ReformedDevGuy" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" className="contact-me-button"></FontAwesomeIcon>
        </a>
        </div><div>
        <a href={myResume} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} size="2x" className="contact-me-button-alt-2"></FontAwesomeIcon>
        </a>
        </div>
     </div>
  );
};

export default FloatingContact;