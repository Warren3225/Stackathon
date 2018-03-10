import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './grid';
import Toolbar from './toolbar';
import Modal from './modal';
import { fetchPiece } from '../store/piece';
import { fetchAllPieces } from '../store/pieces';
import drake from '../dragula'

class Home extends Component {
 constructor() {
   super()

   this.state = {
     showModal: false,
   }
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
 }

  componentWillMount(){
    this.props.fetchPieces();
  }

  openModal(xCoord, yCoord){
    let boxOrCrate = this.props.pieces.some( piece => {
      return(piece.positionX === xCoord && piece.positionY === yCoord && piece.wallOrCrate !== 'wall')
    })
    if(boxOrCrate){
      this.setState({
        xCoord: xCoord,
        yCoord: yCoord,
        showModal: !this.state.showModal
      })
    }
  }

  closeModal(){
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div id="homeWrapper">
        {this.state.showModal && <Modal openModal={this.openModal} xCoord={this.state.xCoord} yCoord={this.state.yCoord} closeModal={this.closeModal} />}
        <Toolbar />
        <Grid openModal={this.openModal} boardPieces={this.props.pieces} />
      </div>
    )
  }
// >>>>>>> master

}

const mapState = ({ piece, pieces }) => ({ piece, pieces })
const mapDispatch = (dispatch) => {
 return ({
   getPiece(x, y) { dispatch(fetchPiece(x, y)) },
   fetchPieces() { dispatch(fetchAllPieces()) }
 })
}


export default connect(mapState, mapDispatch)(Home)