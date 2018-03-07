import React, { Component } from 'react';
import Grid from './grid';
import Toolbar from './toolbar'
//creates a 50 X 50 Grid
export default class Home extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <Toolbar />
      <Grid />
    )
  }
}
