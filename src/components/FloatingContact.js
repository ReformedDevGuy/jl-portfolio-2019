import React from 'react';
import myResume from '../John Larson Resume.pdf';
import { FaGithubSquare, FaLinkedin, FaFilePdf, FaRegEnvelope } from 'react-icons/fa';


const FloatingContact = props => {
  return (
    
    <div className="icon-floats">
      <div>
        <a href="mailto:john@jjlarson.com" target="_blank" rel="noopener noreferrer">
          <FaRegEnvelope  className="contact-me-button" />
        </a>
        </div><div>
        <a href="https://www.linkedin.com/in/johnjlarson/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="contact-me-button"/>
        </a>
        </div><div>
        <a href="https://github.com/ReformedDevGuy" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare className="contact-me-button"/>
        </a>
        </div><div>
        <a href={myResume} target="_blank" rel="noopener noreferrer">
        <FaFilePdf className="contact-me-button"/>
        </a>
        </div>
     </div>
  );
};

export default FloatingContact;