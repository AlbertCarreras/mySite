import React, { Component } from 'react';
import foto from '../foto.JPG';

class Resume extends Component {

  getPosts = async () => {
    let resp = await fetch("https://api.medium.com/v1/users/{{userId}}/publications")
    let respJson = await resp.json()
    console.log(respJson)
  }

  render() {
    return (
      <div>{this.getPosts()}</div>
    );
  }
}

export default Resume;
