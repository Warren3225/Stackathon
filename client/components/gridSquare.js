import React, { Component } from 'react';
import drake from '../dragula';
import dragula from 'react-dragula';

// let counter = 0;
//creates a 50 X 50 Grid
export default class GridSquare extends Component {
  constructor() {
    super()

    this.state = {
      xCoord: '',
      yCoord: '',
    }
    this.crateCheck = this.crateCheck.bind(this);
    this.wallCheck = this.wallCheck.bind(this);
  }

  componentWillMount() {
    this.setState({
      xCoord: this.props.x,
      yCoord: this.props.y,
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log('nextProps', nextProps)
    // console.log('nextState', nextState)
    if(nextProps.boardPieces.Length === this.props.boardPieces.length){
      return false
    } else {
      return true
    }
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      drake.containers.push(componentBackingInstance);
    }
  };

  wallCheck(){
    if(this.props.boardPieces) {
      let boxOrCrate = this.props.boardPieces.some( piece => {
        return (piece.positionX === this.props.x && piece.positionY === this.props.y && piece.wallOrCrate === 'wall')
      })
      return boxOrCrate;
    }
  }

  crateCheck(){
    if (this.props.boardPieces) {
      let boxOrCrate = this.props.boardPieces.some( piece => {
        return (piece.positionX === this.props.x && piece.positionY === this.props.y && piece.wallOrCrate === 'crate')
      })
      return boxOrCrate;
    }
  }

  displayInfo(){
    console.log('hover');
  }

  //currently double drawing boxes
  render() {
    return (
      <div id={`x${this.props.x}y${this.props.y}`} className={`gridSquare x=${this.props.x} y=${this.props.y}`}
         ref={this.dragulaDecorator} onClick={() => this.props.openModal(this.props.x, this.props.y)} onMouseOver={() => this.displayInfo}>
          {this.crateCheck() &&
            <div className="crate">
            </div>
          }
          {this.wallCheck() &&
            <div className="wall">
            </div>
          }
      </div>
    )
  }

}
