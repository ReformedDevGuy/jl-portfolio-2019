import React from 'react';
import Project from './Project';
import theEleganeLensPreview from '../previews/the-elegant-lens/preview.png';
import renaissancePreview from '../previews/renaissance/preview.png';
import fyloPreview from '../previews/fylo/preview.png';
import bookmarkPreview from '../previews/bookmark/preview.png';
import clipboardPreview from '../previews/clipboard/preview.png';
import huddlePreview from '../previews/huddle/preview.png';
import balloonPreview from '../previews/balloon/preview.png';

const projects = [
  {
    title: 'The Elegant Lens',
    link: 'https://www.theelegantlens.com/',
    repo: 'https://github.com/ReformedDevGuy/the-elegant-lens',
    desc:
      'A responsive website for a wedding photography business that displays information in a clean and organized manner. Utilizes HTML, CSS and Bootstrap.',
    features: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Clean UI',
      'Responsive Layout'
    ],
    preview: theEleganeLensPreview
  },
  {
    title: 'The Renaissance',
    link: 'https://renaissance.jjlarson.com/',
    repo: 'https://github.com/ReformedDevGuy/restaurant-master',
    desc:
      'A responsive website for a fictional upscale restaurant. Includes a landing page, menus, contact forms and a blog.',
    features: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Clean UI',
      'Responsive Layout'
    ],
    preview: renaissancePreview
  },
  {
    title: 'Fylo Landing Page',
    link: 'https://fylo.jjlarson.com/',
    repo: 'https://github.com/ReformedDevGuy/fylo-master',
    desc:
      'A responsive landing page for a file managment application.',
    features: [
      'HTML',
      'CSS',
      'Clean UI',
      'Responsive Layout'
    ],
    preview: fyloPreview
  },
  {
    title: 'Bookmark Landing Page',
    link: 'https://bookmark.jjlarson.com/',
    repo: 'https://github.com/ReformedDevGuy/bookmark-master',
    desc:
      'A responsive landing page for a bookmark management extension',
    features: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Clean UI',
      'Responsive Layout'
    ],
    preview: bookmarkPreview
  },
  {
    title: 'Clipboard Landing Page',
    link: 'https://clipboard.jjlarson.com/',
    repo: 'https://github.com/ReformedDevGuy/clipboard-master',
    desc:
      'A responsive landing page for productivity software that manages users clipboards',
    features: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Clean UI',
      'Responsive Layout'
    ],
    preview: clipboardPreview
  },
  {
    title: 'Huddle Landing Page',
    link: 'https://huddle.jjlarson.com/',
    repo: 'https://github.com/ReformedDevGuy/huddle-master',
    desc:
      'A responsive landing page for an application that helps workers collaborate and manage projects.',
    features: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Clean UI',
      'Responsive Layout'
    ],
    preview: huddlePreview
  },
  {
    title: 'Balloon Pop Game',
    link: 'https://balloons.jjlarson.com/',
    repo: 'https://github.com/ReformedDevGuy/balloon-pop-game-master',
    desc:
      'A web app that displays a simple game, where the objective is to pop 100 balloons before any reach the top of the screen. Warning: there is sound!',
    features: [
      'HTML',
      'SCSS',
      'JavaScript'
    ],
    preview: balloonPreview
  }
];

const Projects = props => {
  return (
    <div className="projects">
      <h2>Sample Projects</h2>
      <div className="projects-container">
        {projects.map((project, i) => {
          return <Project key={i} data={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
