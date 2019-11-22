import React from 'react';

import Logo from "./img/favicon.png";

const Footer = props => {
  return (
    <div className="footer">
      Copyright John Larson &copy; {new Date().getFullYear()}
      
      
          <img src={Logo} alt="John Larson"></img>
       
    </div>
    
  );
};

export default Footer;