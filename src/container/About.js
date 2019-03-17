import React, { Component } from 'react';
import foto from '../foto.JPG';

class About extends Component {
  render() {
    return (
      <div className='sub-container'>
          <img 
            className="photo"
            src={foto}
            alt="Alberto" 
          />
          <div className='detail-container'>
            <div>
              Junior web developer in New York City.
            </div>
            <div>
              Visit my <a
              href="http://bit.ly/ACGithub"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a> or <a
              href="http://bit.ly/LinkedInCarreras"
              target="_blank"
              rel="noopener noreferrer"
              >Linkedin</a> page to learn more about me!
            </div>
            <div>
              Languages — JavaScript / Ruby / HTML5 / CSS3 / SQL
            </div>
            <div>
              Frameworks, libraries & more​ — React / Redux / Thunk / Node.js / React Native / Rails / SASS / Git
            </div>
            <div>
              Non-technical — Sketch / Illustrator / Photoshop / InDesign / Native Spanish Language
            </div>
            <div>
              Contact me <a
              href="mailto:acarrerasc+developer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >acarrerasc+developer@gmail.com</a>
            </div>
          </div>
      </div>
    );
  }
}

export default About;
