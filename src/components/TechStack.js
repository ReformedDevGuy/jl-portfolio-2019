import React from 'react';
import { Fade } from 'react-reveal';
import reactIcon from '../icons/react.svg';
import reduxIcon from '../icons/redux.svg';
import sassIcon from '../icons/sass.svg';
import bootstrapIcon from '../icons/bootstrap-4.svg';
import expressIcon from '../icons/express-109.svg';
import nodeIcon from '../icons/node.svg';
import mongoIcon from '../icons/mongodb.svg';


const TechStack = props => {
  return (
    <div className="tech-stack">
      <div className="tech-stack--wrapper">
        <div className="tech-stack__frontend">
          <Fade>
            <h2>Front-End Tech</h2>
          </Fade>
          <div className="frontend-tools">
            <Fade delay={100}>
              <img src={reactIcon} alt="" />
            </Fade>
            <Fade delay={200}>
              <img src={reduxIcon} alt="" />
            </Fade>
            <Fade delay={300}>
              <img src={sassIcon} alt="" />
            </Fade>
            <Fade delay={400}>
              <img src={bootstrapIcon} alt="" />
            </Fade>
          </div>
        </div>
        <div className="tech-stack__backend">
          <Fade>
            <h2>Back-End Tech</h2>
          </Fade>
          <div className="backend-tools">
            <Fade delay={100}>
              <img src={nodeIcon} alt="" />
            </Fade>
            <Fade delay={200}>
              <img src={expressIcon} alt="" />
            </Fade>
            <Fade delay={300}>
              <img src={mongoIcon} alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
