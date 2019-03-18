import React, { Component } from 'react';

class Modal extends Component {

  displayInfo = (info) => {
    switch(info) {
      case 'Resume':
        return <iframe 
        className='resume'
        title='Resume pdf' 
        src="https://drive.google.com/file/d/10abHpP0R7Px4_nTEIeQYrG4D88ZhuEFZ/preview" 
        frameborder="0" 
        width="640" 
        height="840"
        ></iframe>
      case 'Medium':
        return <iframe 
                  className='resume'
                  width='100%' height='600px'
                  src="http://bit.ly/ACMedium" 
                  title="Medium page">
                </iframe>
      default:
        return null
    }
  }

  render() {

    const divStyle = {
      display: this.props.modalDisplay ? 'block' : 'none',
    };

    return (
      <div className="modal" style={divStyle}>
        <div className="modal-content">
          <span 
            className="close"
            onClick={ () => this.props.selectModal() }
            >&times;</span>
            {this.displayInfo(this.props.selectInfo)}
        </div>
      </div>
    );
  }
}

export default Modal;
