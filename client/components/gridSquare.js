import React, { Component } from 'react';

//creates a 50 X 50 Grid
export default class GridSquare extends Component {
  constructor(){
    super()
  }

  //from https://github.com/react-dnd/react-dnd/blob/master/examples/00%20Chessboard/Tutorial%20App/Board.js
  renderSquares(i){
    const x = i % 8
		const y = Math.floor(i / 8)

		return (
			<div key={i} style={{ width: '12.5%', height: '12.5%' }}>
				<GridSquare x={x} y={y}>
					{this.renderPiece(x, y)}
				</GridSquare>
			</div>
		)
  }

}
