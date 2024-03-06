import React from 'react';
import './Projects.css';
import opperstat from './images/opperstats.png'
import port from './images/port.png'
import ringo from './images/ringo.png'

const Projects = () => {
  const handleOpperStatsClick = () => {
    // Handle the click event for OpperStats
    window.open('https://maxopper.github.io/OpperStats/', '_blank');
  };

  const handleTrumanChatClick = () => {
    // Handle the click event for TrumanChat
    window.open('https://github.com/MaxOpper/Discord-Companion-Bot', '_blank');
  };

  const handlePortClick = () => {
    alert("You're already here!");
  };

  const handleReadPort = () => {
    window.open('https://github.com/MaxOpper/MaxOpper', '_blank');
  };

  const handleReadStat = () => {
    window.open('https://github.com/MaxOpper/OpperStats', '_blank');
  };

  const handleReadChat = () => {
    window.open('https://drive.google.com/file/d/125cyK3xAI4foVghxPTdsPzTwDH8AVd31/view', '_blank');
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="project-list">
          {/* OpperStats Project */}
          <div className="project opperstats">
            <button className="header-button" onClick={handleOpperStatsClick}>OpperStats</button>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System).</p>
            <img src={opperstat} alt="OpperStats Project" />
            <button className="read-button" onClick={handleReadStat}>Read More</button>
          </div>
          {/* Ringo Project */}
          <div className="project trumanchat">
            <button className="header-button" onClick={handleTrumanChatClick}>Ringo</button>
            <p>Discord bot with voice commands and GPT 3.5 integration.</p>
            <img src={ringo} alt="Ringo Project" />
            <button className="read-button" onClick={handleReadChat}>Read More</button>
          </div>
          {/* Portfolio Project */}
          <div className="project portfolio">
            <button className="header-button" onClick={handlePortClick}>Portfolio</button>
            <p>The site you are currently on!</p>
            <img src={port} alt="Portfolio Site" />
            <button className="read-button" onClick={handleReadPort}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
