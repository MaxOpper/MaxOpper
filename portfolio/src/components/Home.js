import React, { useState, useEffect } from 'react';
import './Home.css';
import profile from './images/profile.jpg';
import profile2 from './images/profile2.jpg';
import profile3 from './images/profile3.jpeg';
import profile4 from './images/profile4.JPG';
import profile5 from './images/profile5.JPG';
const images = [profile, profile2, profile3, profile4, profile5];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleDotClick = (index) => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setCurrentImage(index);
    setInterval(nextImage, 6000)
  };

  useEffect(() => {
    const id = setInterval(nextImage, 6000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="about">
      <div className='row'>
        <div className='columnExp'>
          <div className="profile">
            <img src={images[currentImage]} alt="Profile" />
            <div className="image-indicators">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
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
