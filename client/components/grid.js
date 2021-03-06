import React, { Component } from 'react';
import GridSquare from './gridSquare';
import drake from '../dragula'

//creates a 20 X 20 Grid
export default class Grid extends Component {
  constructor(props) {
    super(props)
  }

  //from https://github.com/react-dnd/react-dnd/blob/master/examples/00%20Chessboard/Tutorial%20App/Board.js
  renderSquares(i) {
    const x = i % 20
    const y = Math.floor (i / 20)

    return (
      <div key={i}>
        <GridSquare x={x} y={y} openModal={this.props.openModal} boardPieces={this.props.boardPieces} />
      </div>
    )
  }

  render() {
    const squares = []
    for (let i = 0; i < 400; i++) {
      squares.push(this.renderSquares(i))
    }
    return (
      <div className='gridWrapper'>
        {squares}
      </div>
    )
  }

}
