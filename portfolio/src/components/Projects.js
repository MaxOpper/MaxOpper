<<<<<<< HEAD
=======
// components/Projects.js
>>>>>>> 5fe4655d87ef9b5970aa7654bbf2bd47f66c033a
import React from 'react';
import './Projects.css';

const Projects = () => {
<<<<<<< HEAD
  const handleOpperStatsClick = () => {
    // Handle the click event for OpperStats
    window.open('https://maxopper.github.io/OpperStats/', '_blank');
  };

  const handleTrumanChatClick = () => {
    // Handle the click event for TrumanChat
    window.open('https://example.com/trumanchat', '_blank');
  };

=======
>>>>>>> 5fe4655d87ef9b5970aa7654bbf2bd47f66c033a
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="project-list">
          <div className="project">
<<<<<<< HEAD
            <button className="header-button" onClick={handleOpperStatsClick}>OpperStats</button>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System)</p>
          </div>
          <div className="project">
            <button className="header-button" onClick={handleTrumanChatClick}>TrumanChat</button>
=======
            <h3>OpperStats</h3>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System)</p>
          </div>
          <div className="project">
            <h3>TrumanChat</h3>
>>>>>>> 5fe4655d87ef9b5970aa7654bbf2bd47f66c033a
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
