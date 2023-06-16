// components/About.js
import React from 'react';
import './About.css';
import pythonPNG from './images/python.png'
import cppPNG from './images/cpp.png'
import JSPNG from './images/JS.png'
import RPNG from './images/R.png'
import CSSPNG from './images/CSS.png'
import HTMLPNG from './images/HTML.png'
const About = () => {
  return (
    <section id="about" className="about">
      <body>


      <div class="row">
  <div class="column">
    <h2>Languages</h2>
    <div class="language-item">
  <div>
    <img src={pythonPNG} alt="Python" />
    <p>Python</p>
  </div>
  <div>
    <img src={JSPNG} alt="Python" />
    <p>JavaScript</p>
  </div>
  <div>
    <img src={cppPNG} alt="CPP" />
    <p>C++</p>
  </div>
  <div>
    <img src={RPNG} alt="Python" />
    <p>R</p>
  </div>
  <div>
    <img src={HTMLPNG} alt="Python" />
    <p>HTML</p>
  </div>
  <div>
    <img src={CSSPNG} alt="Python" />
    <p>CSS</p>
  </div>
</div>

  </div>
  <div class="column">
    <h2>Tools</h2>
    <p>Some text..</p>
  </div>
  <div class="column">
    <h2>Education</h2>
    <p>Some text..</p>
  </div>
</div>



</body>
    </section>
  );
}

export default About;
