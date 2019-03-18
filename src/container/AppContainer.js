import React, { Component } from 'react';
import Menu from './Menu'
import About from './About'
import Interests from './Interests'
import Projects from './Projects'
import Modal from './Modal'


class AppContainer extends Component {
  state = {
    selected: 'About',
    modal: false,
    modalInfo: null
  }

  //props function to Menu
  selectFunc = (option) => {
    this.setState({
      selected: option
    })
  }

  selectModal = (info) => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
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
      default:
        return <About/>
    }
  }

  render() {
    return (
      <div className='main-container'>
        <Modal 
          modalDisplay={this.state.modal}
          selectModal={this.selectModal}
          selectInfo={this.state.modalInfo}
        />
        <Menu
          selected={this.state.selected}
          selectFunc={this.selectFunc}
          selectModal={this.selectModal}
        />
        {this.displayContainer()}
      </div>
    );
  }
}

export default AppContainer;
