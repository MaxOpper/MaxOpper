// components/About.js
import React from 'react';
import './About.css';
import pythonPNG from './images/python.png'
import cppPNG from './images/cpp.png'
import JSPNG from './images/JS.png'
import RPNG from './images/R.png'
import CSSPNG from './images/CSS.png'
import HTMLPNG from './images/HTML.png'
import reactPNG from './images/react.png'
import flaskPNG from './images/flask.png'
import gitPNG from './images/git.png'
import firebasePNG from './images/firebase.png'
import excelPNG from './images/excel.png'
import awsPNG from './images/aws.png'
import uiPNG from './images/ui.png'
import rfPNG from './images/rf.png'
import latexPNG from './images/latex.png'
import rmdPNG from './images/rmd.png'
import comPNG from './images/com.png'
import thinkPNG from './images/think.png'

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
    <div class="language-item">
      <div>
        <img src={reactPNG} alt="Python" />
        <p>React</p>
      </div>
      <div>
        <img src={flaskPNG} alt="Python" />
        <p>Flask</p>
      </div>
      <div>
        <img src={firebasePNG} alt="CPP" />
        <p>Firebase</p>
      </div>
      <div>
        <img src={awsPNG} alt="Python" />
        <p>AWS</p>
      </div>
      <div>
        <img src={gitPNG} alt="Python" />
        <p>Git</p>
      </div>
      <div>
        <img src={excelPNG} alt="Python" />
        <p>Excel</p>
      </div>
    </div>
  </div>

  <div class="column">
    <h2>Skills</h2>
    <div class="language-item">
      <div>
        <img src={uiPNG} alt="Python" />
        <p>UI/UX Design</p>
      </div>
      <div>
        <img src={rfPNG} alt="Python" />
        <p>Random Forest Modeling</p>
      </div>
      <div>
        <img src={latexPNG} alt="CPP" />
        <p>Mathematical Typesetting</p>
      </div>
      <div>
        <img src={rmdPNG} alt="Python" />
        <p>Data Processing</p>
      </div>
      <div>
        <img src={comPNG} alt="Python" />
        <p>Communication</p>
      </div>
      <div>
        <img src={thinkPNG} alt="Python" />
        <p>Critical Thinking</p>
      </div>
    </div>
  </div>
</div>




</body>
<div class="rowExp">
  <div class="columnExp">
    <h2>Education</h2>
    <div class="container">
      <div class="education-item">
        <div class="school-info">
          <p>Truman State University, Kirksville, MO</p>
          <p>B.S. Computer Science with Minor in Statistics</p>
          <p>Expected Graduation: 2023</p>
        </div>
      </div>
    </div>
  </div>
  <div class="columnExp">
    <h2>Experience</h2>
    <div class="container">
      <div class="education-item">
        <div class="school-info">
          <p>Sample text</p>
          <p>Sample text</p>
          <p>Sample text</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default About;
