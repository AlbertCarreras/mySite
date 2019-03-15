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
            Background.
            <br/>
            Sustainability
            <br/>
            <a href="http://www.bop.nyc">Billion Oyster Project</a>
            <a href="https://earthmatter.org/">Earth Matter</a>
            Board Games
            <br/>
            Music
            <br/>
          </div>

      </div>
    );
  }
}

export default About;
