// components/Footer.js
import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [mode, setMode] = useState('dark');
  const handleModeChange = (newMode) => {
    setMode(newMode);
    // Remove previous class and add new class to the body tag
    document.body.classList.remove('light-theme', 'dark-theme', 'pink-theme', 'blue-theme');
    document.body.classList.add(`${newMode}-theme`);
    console.log(newMode);
  };

  useEffect(() => {
    document.body.classList.add('dark-theme');
  }, []);
  

  return (
    <footer className={`footer ${mode}`}>
      <div className="container">
        
        <div className="mode-switcher">
          <div
            className={`mode-switcher-circle dark ${mode === 'dark' ? 'active' : ''}`}
            onClick={() => handleModeChange('dark')}
          ></div>
          <div
            className={`mode-switcher-circle light ${mode === 'light' ? 'active' : ''}`}
            onClick={() => handleModeChange('light')}
          >
          </div>
          <div
            className={`mode-switcher-circle pink ${mode === 'pink' ? 'active' : ''}`}
            onClick={() => handleModeChange('pink')}
          ></div>
          <div
            className={`mode-switcher-circle blue ${mode === 'blue' ? 'active' : ''}`}
            onClick={() => handleModeChange('blue')}
          ></div>
        </div>
      </div>
      <p>&copy; 2023 Maxwell Opper</p>
    </footer>
  );
}

export default Footer;
