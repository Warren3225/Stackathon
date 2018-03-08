import React, { Component } from 'react';
import TopPane from './topPane';

//creates a 50 X 50 Grid
export default class Toolbar extends Component {

  render(){
    return (
      <div id="toolbarWrapper">
        <div id="topPane">
          <TopPane />
        </div>
        <div id="bottomPane">
        </div>
      </div>
    )
  }

}
