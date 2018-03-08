import React, { Component } from 'react';
import drake from '../dragula';


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

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      drake.containers.push(componentBackingInstance);
    }
  };

  render(){
    return(
      <div ref={this.dragulaDecorator}>
        <div className="gridSquare">
        </div>
      </div>
    )
  }

}
