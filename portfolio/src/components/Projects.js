import React from 'react';
import './Projects.css';
import opperstat from './images/opperstats.png'
import tc from './images/tc.png'
import cirke from './images/cirke.png'
const Projects = () => {
  const handleOpperStatsClick = () => {
    // Handle the click event for OpperStats
    window.open('https://maxopper.github.io/OpperStats/', '_blank');
  };

  const handleTrumanChatClick = () => {
    // Handle the click event for TrumanChat
    window.open('https://maxopper.github.io/TrumanChat/', '_blank');
  };

  const handleCirkeClick = () => {
    // Handle the click event for TrumanChat
    window.open('https://maxopper.github.io/TrumanChat/', '_blank');
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="project-list">
          <div className="project opperstats">
            <button className="header-button" onClick={handleOpperStatsClick}>OpperStats</button>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System)</p>
            <img src={opperstat} alt="Profile" />
            <button className="read-button" onClick={handleOpperStatsClick}>Read More</button>
          </div>
          <div className="project trumanchat">
            <button className="header-button" onClick={handleTrumanChatClick}>TrumanChat</button>
            <p>Messaging app for Truman State University students</p>
            <img src={tc} alt="Profile" />
            <button className="read-button" onClick={handleOpperStatsClick}>Read More</button>
          </div>
          <div className="project opperstats">
            <button className="header-button" onClick={handleOpperStatsClick}>CirkeBot</button>
            <p>Cirke inspired Discord bot that responds to images</p>
            <img src={cirke} alt="Profile" />
            <div></div>
            <button className="read-button" onClick={handleOpperStatsClick}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
