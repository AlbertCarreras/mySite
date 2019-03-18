import React, { Component } from 'react';
import Menu from './Menu'
import About from './About'
import Interests from './Interests'
import Projects from './Projects'
import Resume from './Resume'


class AppContainer extends Component {
  state = {
    selected: 'About'
  }

  //props function to Menu
  selectFunc = (option) => {
    this.setState({
      selected: option
    })
  }
  
  //selector for container rendering
  displayContainer = () => {
    switch(this.state.selected) {
      case 'About':
        return <About/>
      case 'Interests':
        return <Interests /> 
      case 'Projects':
        return <Projects /> 
      case 'Resume':
        return <Resume /> 
      default:
        return <About/>
    }
  }
  render() {
    return (
      <div className='main-container'>
        <Menu
        selected={this.state.selected}
        selectFunc={this.selectFunc}
        />
        {this.displayContainer()}
      </div>
    );
  }
}

export default AppContainer;
