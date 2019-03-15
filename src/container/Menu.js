import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
            <div
              onClick={() => console.log("hi")} 
            >Albert Carreras</div>
            <div onClick={() => console.log("hi")} 
            >projects</div>
            <div>
              <a
              href="http://bit.ly/ACGithub"
              target="_blank"
              rel="noopener noreferrer"
              >github</a>
            </div>
            <div>
              <a
              href="http://bit.ly/AlbertoCarrerasResume"
              target="_blank"
              rel="noopener noreferrer"
              >resume</a>
            </div>
            <div>
              <a
              href="http://bit.ly/LinkedInCarreras"
              target="_blank"
              rel="noopener noreferrer"
            >linkedin</a>
            </div>
            <div>
              <a
              href="http://bit.ly/ACMedium"
              target="_blank"
              rel="noopener noreferrer"
            >medium</a>
            </div>
          
            <div 
              onClick={ () => console.log("hi")} 
            >interests</div>
            <div
              onClick={ () => console.log("hi")} 
            >contact</div>
      </div>
    );
  }
}

export default Menu;
