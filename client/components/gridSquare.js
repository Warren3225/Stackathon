import React, { Component } from 'react';
import drake from '../dragula';


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
      yCoord: this.props.y
    })
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      drake.containers.push(componentBackingInstance);
    }
  };

  wallCheck(){
    if(this.props.pieces) {
      let boxOrCrate = this.props.boardPieces.some( piece => {
        return(piece.positionX === this.props.x && piece.positionY === this.props.y && piece.wallOrCrate === 'wall')
      })
      return boxOrCrate;
    }
  }

  crateCheck(){
    if (this.props.pieces) {
      let boxOrCrate = this.props.pieces.some( piece => {
        return (piece.positionX === this.props.x && piece.positionY === this.props.y && piece.wallOrCrate === 'crate')
      })
      return boxOrCrate;
    }
  }

  render() {
    return (
      <div className={`gridSquare x=${this.props.x} y=${this.props.y}`} ref={this.dragulaDecorator} onClick={() => this.props.openModal(this.props.x, this.props.y)}>
        <div>
          {this.crateCheck() ?
            <div className="wall">
            </div> : <div></div>
          }
          {this.wallCheck() ?
            <div className="crate">
            </div> : <div></div>
          }
        </div>
      </div>
    )
  }

}
