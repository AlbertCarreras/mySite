import React, { Component } from 'react';
import Menu from './Menu'
import About from './About'


class AppContainer extends Component {
  state = {
    selected: 0
  }

  //props function to Menu
  selectMenu = (option) => {
    this.setState({
      selected: option
    })
  }
  
  //selector for container rendering
  displayContainer = () => this.state.selected === 0 ? <About /> : null

  render() {
    return (
      <div>
        <Menu 
          selected={this.state.selected}
          selectMenu={this.selectMenu}
        />
        <div>
          {this.displayContainer()}
        </div>
      </div>
    );
  }
}

export default AppContainer;
