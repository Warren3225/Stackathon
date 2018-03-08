import React, { Component } from 'react';
import drake from '../dragula';


export default class Wall extends Component {
  constructor(){
    super()
  }

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
