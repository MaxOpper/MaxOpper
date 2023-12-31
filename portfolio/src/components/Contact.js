// components/Contact.js
import React from 'react';
import './Contact.css';
import linkedinImage from './images/lin.png';
import githubImage from './images/github.png';
import instagramImage from './images/instagram.png';
import gmailImage from './images/gmail.png'
const Contact = ({ setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };
  return (
    <section id="contact" className="contact">

  <header className="header2">
      <nav>
            <button onClick={() => handleSectionClick('home')}>Home</button>

            <button onClick={() => handleSectionClick('about')}>Resume</button>

            <button onClick={() => handleSectionClick('projects')}>Projects</button>
      </nav>
    </header>

      <h2>Contact Me</h2>
      <div className="container">
        
      <div className="social-links">
          <a href="https://github.com/MaxOpper" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/maxwell-opper-99865a245" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/maxopper/" target="_blank" rel="noopener noreferrer">
            <img src={instagramImage} alt="Instagram" />
          </a>
          <a href="mailto:maxwell8270@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailImage} alt="Gmail" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
