import React, { Component } from 'react';
import foto from '../foto.JPG';

class Resume extends Component {
  render() {
    return (
      <div className='sub-container'>
          <img 
            className="photo"
            src={foto}
            alt="Alberto" 
          />
          <div className='detail-container'>
            <iframe 
              className='resume'
              title='Resume' 
              src="https://drive.google.com/file/d/10abHpP0R7Px4_nTEIeQYrG4D88ZhuEFZ/preview" 
              frameborder="0" 
              width="640" 
              height="840"
              ></iframe>
          </div>
      </div>
    );
  }
}

export default Resume;
