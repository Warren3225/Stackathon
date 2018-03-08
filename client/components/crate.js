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
      <div className="crateContainer">
        <div className="crate">
        </div>
      </div>
    )
  }
}
