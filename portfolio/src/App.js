// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

export default App;
