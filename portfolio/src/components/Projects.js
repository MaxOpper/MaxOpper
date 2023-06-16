// components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="project-list">
          <div className="project">
            <h3>OpperStats</h3>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System)</p>
          </div>
          <div className="project">
            <h3>TrumanChat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
