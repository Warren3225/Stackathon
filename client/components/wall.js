import React, { Component } from 'react';
import drake from '../dragula';
import Dragula from 'react-dragula'


export default class Wall extends Component {
  constructor(){
    super()
  }

  // componentDidMount() {
  //   var container = this.wallContainer;
  //   drake.crateWallDrake.containers.push(container)
  // }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      drake.containers.push(componentBackingInstance);
    }
  };

  render(){
    return (
      <div className="wallContainer" ref={this.dragulaDecorator}>
        <div className="wall">
        </div>
      </div>
    )
  }
}
