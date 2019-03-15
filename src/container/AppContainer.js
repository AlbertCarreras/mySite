import React, { Component } from 'react';
import Menu from './Menu'
import About from './About'
import Interests from './Interests'
import Contact from './Contact'


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
    switch(this.setState.selected) {
      case 'About':
        return <About/>
      case 'Interests':
        return <Interests /> 
      case 'Contact':
        return <Contact /> 
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
