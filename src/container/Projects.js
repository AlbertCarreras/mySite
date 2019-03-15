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
          <div>
            Junior web developer in New York City.
            <br/>
            Visit my GitHub or LinkedIn page to learn more about me!
            <br/>
            Languages — JavaScript / Ruby / HTML5 / CSS3 / SQL
            <br/>
            Frameworks, libraries & more​ — React / Redux / Thunk / Node.js / React Native / Rails / SASS / Git
            <br/>
            Non-technical — Sketch / Illustrator / Photoshop / InDesign / Native Spanish Language
          </div>

      </div>
    );
  }
}

export default About;
