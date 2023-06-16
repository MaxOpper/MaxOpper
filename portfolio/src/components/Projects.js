import React from 'react';
import './Projects.css';

const Projects = () => {
  const handleOpperStatsClick = () => {
    // Handle the click event for OpperStats
    window.open('https://maxopper.github.io/OpperStats/', '_blank');
  };

  const handleTrumanChatClick = () => {
    // Handle the click event for TrumanChat
    window.open('https://example.com/trumanchat', '_blank');
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="project-list">
          <div className="project">
            <button className="header-button" onClick={handleOpperStatsClick}>OpperStats</button>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System)</p>
          </div>
          <div className="project">
            <button className="header-button" onClick={handleTrumanChatClick}>TrumanChat</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
