// components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="header">
      <div className="branding">
        <h1 className="name">Maxwell Opper</h1>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleSectionClick('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('about')}>Resume</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('projects')}>Projects</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
