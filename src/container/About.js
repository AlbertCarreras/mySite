import React, { Component } from 'react';
import Interests from './Interests'
import foto from '../foto.JPG';

class About extends Component {


  state = {
    more: false
  }

  toggle = () => {
    this.setState({
      more: !this.state.more
    })
  }

  displayMore = () => {
    if (this.state.more) {
      return <Interests />
    }
  }


  render() {
    return (
      <div className='sub-container'>
          <img 
            className="photo"
            src={foto}
            alt="Alberto" 
          />
          <div className='about detail-container'>
            <div>
              <h2>I'm Alberto, nice to meet you.</h2>
            </div>
            <div>
              Web Developer
            </div>
            <div>
              Visit my <a
              className='links'
              href="http://bit.ly/ACGithub"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a> or <a
              className='links'
              href="http://bit.ly/LinkedInCarreras"
              target="_blank"
              rel="noopener noreferrer"
              >Linkedin</a> page to learn more about me!
            </div>
            <div className='about-skills'>
              <div><b>Languages — </b>JavaScript / Ruby / HTML5 / CSS3 / SQL</div>
              <div><b>Frameworks, libraries & more​ — </b>React / Redux / Thunk / Node.js / React Native / Rails / SASS / Git</div>
              <div><b>Non-technical — </b>Sketch / Illustrator / Photoshop / InDesign / Native Spanish Language</div>
            </div>
            <div>
              Contact me — <a
              className='links'
              href="mailto:acarrerasc+developer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >acarrerasc+developer@gmail.com</a>
            </div>
            {this.state.more 
              ? <span 
                  role="img"
                  aria-label="Close"
                  onClick={this.toggle}
                  >➖</span>
              : <span 
                  role="img"
                  aria-label="Open"
                  onClick={this.toggle}
                  >➕</span>}
            {this.displayMore()}
          </div>
      </div>
    );
  }
}

export default About;
