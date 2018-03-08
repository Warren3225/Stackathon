import React, { Component } from 'react';
import Wall from './wall'
import Crate from './crate'

//creates a 50 X 50 Grid
export default class TopPane extends Component {

  render(){
    return (
      <div id='topPaneWrapper'>
        <Wall />
        <Crate />
      </div>
    )
  }

}
