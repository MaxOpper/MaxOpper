// components/Footer.js
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [mode, setMode] = useState('light'); // Default mode is light

  const handleModeChange = (newMode) => {
    setMode(newMode);
    console.log(newMode);
  };

  return (
    <footer className={`footer ${mode}`}>
      <div className="container">
        
        <div className="mode-switcher">
          <div
            className={`mode-switcher-circle light ${mode === 'light' ? 'active' : ''}`}
            onClick={() => handleModeChange('light')}
          ></div>
          <div
            className={`mode-switcher-circle dark ${mode === 'dark' ? 'active' : ''}`}
            onClick={() => handleModeChange('dark')}
          ></div>
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
