import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div className='menu-container'>
            <div className='title-menu'> Albert Carreras</div>
            <div
            onClick={ () => this.props.selectFunc('About') }
            >about</div>
            <div 
            onClick={ () => this.props.selectFunc('Projects') }
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
            onClick={ () => this.props.selectFunc('Interests') }
            >interests</div>
      </div>
    );
  }
}

export default Menu;
