import React, { Component } from 'react';
import GridSquare from './gridSquare';

//creates a 50 X 50 Grid
export default class ToolBar extends Component {

  render(){
    return (
      <div className='gridWrapper'>
        {squares}
      </div>
    )
  }

}
