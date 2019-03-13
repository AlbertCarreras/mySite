import React, { Component } from 'react';
import foto from '../foto.JPG';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={foto} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default About;
