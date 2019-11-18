import React from 'react';

const Footer = props => {
  return (
    <div className="footer">
      Copyright John Larson &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;