import React, { Component } from 'react';

//creates a 50 X 50 Grid
export default class GridSquare extends Component {
  constructor(){
    super()

    this.state = {
      xCoord: '',
      yCoord: '',
    }
  }

  componentDidMount(){
    this.setState({
      xCoord: this.props.x,
      yCoord: this.props.y
    })
  }

  render(){
    console.log(this.props)
    return(
      <div className="gridSquare">
      </div>
    )
  }

}
