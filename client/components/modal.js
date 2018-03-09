import React, { Component } from 'react';
//creates a 50 X 50 Grid
export default class Modal extends Component {
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <div id="modal">
        </div>
        <div id="modalBackground" onClick={this.props.openModal}>
        </div>
      </div>
    )
  }
}
