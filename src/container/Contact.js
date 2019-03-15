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
          <a href="mailto:acarrerasc+developer@gmail.com">acarrerasc+developer@gmail.com</a>
      </div>
    );
  }
}

export default About;
