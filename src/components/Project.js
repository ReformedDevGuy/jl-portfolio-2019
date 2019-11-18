import React from 'react';
import { Fade } from 'react-reveal';

const Project = ({ data }) => {
  return (
    <Fade anchor="bottom">
      <div className="project">
        <div className="details">
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
          <h4>Features:</h4>
          <ul>
            {data.features.map((f, i) => {
              return <li key={i}>{f}</li>;
            })}
          </ul>
        </div>
        <div className="preview">
          <img src={data.preview} alt="" />
          <div className="visit">
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
            <a href={data.repo} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Project;