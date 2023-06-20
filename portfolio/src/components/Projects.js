import React from 'react';
import './Projects.css';
import opperstat from './images/opperstats.png'
import tc from './images/tc.png'
import port from './images/port.png'
import heard from './images/heard.png'

const Projects = () => {
  const handleOpperStatsClick = () => {
    // Handle the click event for OpperStats
    window.open('https://maxopper.github.io/OpperStats/', '_blank');
  };

  const handleTrumanChatClick = () => {
    // Handle the click event for TrumanChat
    window.open('https://maxopper.github.io/TrumanChat/', '_blank');
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
    window.open('https://github.com/MaxOpper/TrumanChat', '_blank');
  };

  const handleReadHeard = () => {
    window.open('https://github.com/MaxOpper/HeardIT', '_blank');
  };

  const handleHeardClick = () => {
    alert("Coming Soon!");
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="project-list">
          <div className="project opperstats">
            <button className="header-button" onClick={handleOpperStatsClick}>OpperStats</button>
            <p>OpperStats (Open-source Player Projection Estimation Report and Statistics System).</p>
            <img src={opperstat} alt="Profile" />
            <div></div>
            <button className="read-button" onClick={handleReadStat}>Read More</button>
          </div>
          <div className="project trumanchat">
            <button className="header-button" onClick={handleTrumanChatClick}>TrumanChat</button>
            <p>Messaging app for Truman State University students.</p>
            <img src={tc} alt="Profile" />
            <div></div>
            <button className="read-button" onClick={handleReadChat}>Read More</button>
          </div>
          
        </div>
        
      </div>
      <h2>In Progress</h2>
      <div className="container">
        <div className="project-list">
          <div className="project opperstats">
            <button className="header-button" onClick={handlePortClick}>Portfolio</button>
            <p>The site you are currently on!</p>
            <img src={port} alt="Profile" />
            <div></div>
            <button className="read-button" onClick={handleReadPort}>Read More</button>
          </div>
          <div className="project trumanchat">
            <button className="header-button" onClick={handleHeardClick}>HeardIT</button>
            <p>Spiritual Successor to Heardle.io</p>
            <img src={heard} alt="Profile" />
            <div></div>
            <button className="read-button" onClick={handleReadHeard}>Read More</button>
          </div>
          
        </div>
        
      </div>

    </section>
  );
}

export default Projects;
