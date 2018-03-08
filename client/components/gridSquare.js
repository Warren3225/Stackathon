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

  componentWillMount(){
    this.setState({
      xCoord: this.props.x,
      yCoord: this.props.y
    })
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      drake.containers.push(componentBackingInstance);
    }
  };

  render(){
    return(
        <div className={`gridSquare x=${this.props.x} y=${this.props.y}`} ref={this.dragulaDecorator}>
          <div>
          </div>
        </div>
    )
  }

}
