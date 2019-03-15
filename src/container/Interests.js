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
            <div>Sustainability</div>
            <div>I studied environmental sciences and have always worked on sustainability projects. In NYC, I’ve been involved with several environmental and educational not-for-profits. Check the <a href="http://www.bop.nyc">Billion Oyster Project</a> and <a href="https://earthmatter.org/">Earth Matter</a> projects. They have great missions and I'm really proud of having worked with them.
            </div>
            <div>Board Games</div>
            <div>I am a board game enthusiast. I'm always down to play Terraforming Mars, Cosmic Encounters, Dominion, Carcassonne, Photosynthesis, Hansa Teutonica. You can find me many Satudays at The Brooklyn Strategist. And I won't miss Metatopia and PAX Unplugged.
            </div>
            <div>Writing</div>
            I enjoy writing. Check some of the poems I wrote for the annual publication <a href="https://nanorelatosmagicos.com0"
            target="_blank"
            rel="noopener noreferrer"  
            >Nanorelatos mágicos</a><br/>
            <div>
                <a href="https://www.dropbox.com/s/fipfvbpopihwij1/Nano-relatos.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"  
                >Quizá escribamos una canción anti-folk</a><br/>
                <a href="https://www.dropbox.com/s/aj8lp4a7dfygnz0/La%20b%C3%BAsqueda.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
                >La búsqueda</a><br/>
                <a href="https://www.dropbox.com/s/6hk2nhiskxzkxa4/Siestoesvidayomemuero.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
                >Si esto es vida yo me muero</a><br/>
                <a href="https://www.dropbox.com/s/qvlqqg07g0eba8r/Nac%C3%AD%20en%20el%20Mediterr%C3%A1neo%20-%20Google%20Docs.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
                >Nací en el Mediterráneo</a>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
