import React, { Component } from 'react';
import drake from '../dragula';

export default class Wall extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    //dragula stuff goes here
  }

  render(){
    return (
      <div className="wallContainer">
        <div className="wall">
        </div>
      </div>
    )
  }
}
