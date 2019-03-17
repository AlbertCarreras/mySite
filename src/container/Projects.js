import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='sub-container detail-container project-container'>
          <div>
            <div>SUPP</div>
              <div>
              <a href="https://github.com/AlbertCarreras/supp-client"
              target="_blank"
              rel="noopener noreferrer"  
              >GITHUB Front-end</a> | 
              <a href="https://github.com/AlbertCarreras/supp-server"
              target="_blank"
              rel="noopener noreferrer"
              >GITHUB Back-end</a> | 
              <a href="https://albertcarreras.github.io/supp-client/home"
              target="_blank"
              rel="noopener noreferrer"
              >Site </a>
            </div>
            <div>Hosted in Heroku, wait a few seconds until the server wakes up! (user: tester & password: 12345678)</div>
            <div>A user-friendly app that sorts users by distance and filters them by common interests/hobbies. Users connect with each other via private chats.</div>
            <iframe title='SUPP' width="560" height="315" src="https://www.youtube-nocookie.com/embed/yG3gEc1bC60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
              <div>Front-end</div>
                React with Redux & Redux Thunk
                - Geolocation Web API for obtaining user’s current location coordinates
                - Custom CSS, SASS, and Semantic UI elements for front-end design. Responsive and web first design.
                <div>Back-end</div>
                Rails API with with serialization and Postgres
                - Active Storage for photo storage connected to AWS S3 in production
                - Action Cable for live private chat feed updating and connected-user indicators
                - Knock for JSON Web Token authentication and cookies for websocket-connection authentication
                - Geokit for calculating surrounding users to connected user distance 
              </div>
          </div>

          <div>
            <div>Piano Friend</div>
              <div>
              <a href="https://github.com/AlbertCarreras/piano-app"
              target="_blank"
              rel="noopener noreferrer"  
              >GITHUB Front-end</a> | 
              <a href="https://github.com/AlbertCarreras/piano_api"
              target="_blank"
              rel="noopener noreferrer"
              >GITHUB Back-end</a> | 
              <a href="https://albertcarreras.github.io/piano-app"
              target="_blank"
              rel="noopener noreferrer"
              >Site </a>
            </div>
            <div>Hosted in Heroku, wait a few seconds until the server wakes up!</div>
            <div>A piano app to create, save, and share simple piano songs.</div>
            <iframe title='PIANO' width="560" height="315" src="https://www.youtube-nocookie.com/embed/nU9_5UOYNgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
              <div>Front-end</div>
              AudioContext Web API for sounds
              <div>Back-end</div>
              Rails API with serialization and Postgres
            </div>
        </div>

        <div>
          <div>Board Games with Strangers</div>
            <div>
              <a href="https://github.com/AlbertCarreras/piano-app"
              target="_blank"
              rel="noopener noreferrer"  
              >GITHUB</a> 
            </div>
            <div>An app for people to organize and join board games events as well as to save a list of board games they own in their public profile.</div>
            <iframe title='BOARDGAME' width="560" height="315" src="https://www.youtube-nocookie.com/embed/N87whQBbK9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
            <div>Ruby on Rails with MVC</div>
            - Semantics UI for front-end design
            - Cookies and Rails sessions for authentication
          </div>
        </div>

      </div>
    );
  }
}

export default About;
