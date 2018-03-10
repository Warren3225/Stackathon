import React, { Component } from 'react';
import drake from '../dragula';


//creates a 50 X 50 Grid
export default class GridSquare extends Component {
  constructor() {
    super()

    this.state = {
      xCoord: '',
      yCoord: '',
      rendered: false,
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
      if (document.getElementById(`x${this.props.x}y${this.props.y}`) !== null){
        let children = document.getElementById(`x${this.props.x}y${this.props.y}`).children;
        children = [...children];
        let counter = 0;
        children.forEach(child =>{
          if (child.classList.contains('crate')){
            if (counter >= 1){
              boxOrCrate = false
            }
            counter++;
          }
        })
      }
      return boxOrCrate;
    }
  }

  crateCheck(){
    if (this.props.boardPieces) {
      let boxOrCrate = this.props.boardPieces.some( piece => {
        return (piece.positionX === this.props.x && piece.positionY === this.props.y && piece.wallOrCrate === 'crate')
      })
      if (document.getElementById(`x${this.props.x}y${this.props.y}`) !== null){
        let children = document.getElementById(`x${this.props.x}y${this.props.y}`).children;
        children = [...children];
        let counter = 0;
        children.forEach(child => {
          if (child.classList.contains('crate')){
            if (counter >= 1){
              boxOrCrate = false
            }
            counter++;
          }
        })
      }
      return boxOrCrate;
    }
  }

  //currently double drawing boxes
  render() {
    return (
      <div id={`x${this.props.x}y${this.props.y}`} className={`gridSquare x=${this.props.x} y=${this.props.y}`} ref={this.dragulaDecorator} onClick={() => this.props.openModal(this.props.x, this.props.y)}>
          <div></div>
          {this.crateCheck() ?
            <div className="crate">
            </div> : <div></div>
          }
          {this.wallCheck() ?
            <div className="wall">
            </div> : <div></div>
          }
      </div>
    )
  }

}
