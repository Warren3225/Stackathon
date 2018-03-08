import React, { Component } from 'react';
import drake from '../dragula';

export default class Crate extends Component {
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
      <div className="crateContainer" ref={this.dragulaDecorator}>
        <div className="crate">
        </div>
      </div>
    )
  }
}
