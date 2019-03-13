import React, { Component } from 'react';
import foto from '../foto.JPG';

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={foto} className="App-logo" alt="logo" />
          <p 
            onClick={ () => console.log("hi")} 
          />github<p/>
          <p 
            onClick={ () => console.log("hi")} 
          />projects<p/>
          
          <a
            
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          <a
            
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            medium
          </a>
          <p 
            onClick={ () => console.log("hi")} 
          />interests<p/>
          <p 
            onClick={ () => console.log("hi")} 
          />contact<p/>
        
        </header>
      </div>
    );
  }
}

export default Menu;
