import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from './grid';
import Toolbar from './toolbar';
import Modal from './modal';
import { fetchPiece } from '../store/piece';
import { fetchAllPieces } from '../store/pieces';

class Home extends Component {
  constructor(){
    super()
    
    this.state = {
      showModal: false,
    }
    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchAllPieces();
    
  }
  
  openModal(xCoord, yCoord){
    console.log(this.props.pieces)
    console.log('x,y', xCoord, yCoord)
    let boxOrCrate = this.props.pieces.some( piece => {
      return(piece.positionX === xCoord && piece.positionY === yCoord)
    })
    if(boxOrCrate){
      this.props.getPiece(xCoord, yCoord)
      this.setState({
        showModal: !this.state.showModal
      })
    }
  }
  
  closeModal(){
    this.setState({
      showModal: false
    })
  }

  render(){
    return(
    <div id="homeWrapper">
      {this.state.showModal? <Modal openModal={this.openModal} closeModal={this.closeModal} /> : ''}
      <Toolbar />
      <Grid openModal={this.openModal} />
    </div>
    )
  }
}

const mapState = ({ piece, pieces }) => ({ piece, pieces })
const mapDispatch = (dispatch) => { return ({
  getPiece(x, y){ dispatch(fetchPiece(x, y))},
  fetchAllPieces(){ dispatch(fetchAllPieces())}
})}


export default connect(mapState, mapDispatch)(Home)
