// components/Home.js
import React from 'react';
import './Home.css';
import profileJPG from './images/profile.jpg'

const Home = () => {
  return (
    <section id="about" className="about">
      <div className='row'>
        <div className='columnExp'>
          <div className="profile">
              <img src={profileJPG} alt="Profile" />
          </div>
          
        </div>
        <div className='columnExp'>
        <div className="container">
          <h2>About Me</h2>
                <p className="about-text">
                  I am a senior computer science student with a minor in statistics, on track to graduate at the end of the fall semester. I possess a strong passion for data science and software development. My goal is to leverage my technical skills and knowledge to contribute to innovative software projects. Equipped with a solid foundation in computer science and statistics, I am seeking opportunities to apply my skills and make a significant impact as a software developer.
                </p>
                
              </div>
        </div>
      </div>
        
      
      
    </section>
  );
}

export default Home;
