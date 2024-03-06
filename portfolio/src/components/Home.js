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
    clearInterval(intervalId);
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
            I am a recent computer science graduate with a minor in statistics, having completed my degree in December. My academic journey has fueled a deep-seated passion for data science and software development. As I transition from academia to the professional world, my objective is to apply the technical skills and knowledge I've garnered to contribute meaningfully to innovative software projects. With a solid educational foundation in computer science and statistics, I am actively seeking internship or entry-level developer opportunities where I can apply my skills, continue learning, and make a significant impact in the field of software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
