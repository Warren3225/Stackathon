import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchPiece } from '../store/piece'
import { updatePieceThunk, deletePieceThunk } from '../store/pieces'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      item: '',
      quantity: ''
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  componentWillMount() {
    this.props.loadPieceData(this.props.xCoord, this.props.yCoord)

  }

  handleCategoryChange(event) {
    event.preventDefault()
    this.setState({ category: event.target.value.toLowerCase() })
  }

  handleItemChange(event) {
    event.preventDefault()
    this.setState({ item: event.target.value.toLowerCase() })
  }

  handleQuantityChange(event) {
    event.preventDefault()
    this.setState({ quantity: event.target.value.toLowerCase() })
  }

  //COME BACK TO FIX THIS LATER Quantity is not working
  render() {
    let pieceId = this.props.piece.id
    let pieceX = this.props.piece.positionX;
    let pieceY = this.props.piece.positionY;
    return (
      <div>
        <div id="modal">
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='olive' textAlign='center'>
                Add Inventory to Crate
        </Header>
              <Form onSubmit={(event) => this.props.inventorySubmission(event, pieceId)}>
                <label>Category</label>
                <Form.Input
                  name='category'
                  placeholder={this.props.piece.category || this.state.category}
                  value={this.state.category}
                  onChange={this.handleCategoryChange} />
                <label>Item</label>
                <Form.Input
                  name='item'
                  placeholder={this.props.piece.item || this.state.item}
                  value={this.state.item}
                  onChange={this.handleItemChange} />

                <label>Quantity</label>
                <Form.Input
                  name='quantity'
                  placeholder={this.props.piece.quantity || this.state.quantity}
                  value={this.state.quantity}
                  onChange={this.handleQuantityChange} />
                <Button type='submit'>Submit</Button>
              </Form>
              <Button type='submit' onClick={() => this.props.deleteCrate(pieceX, pieceY)}>Delete Crate</Button>
            </Grid.Column>
          </Grid>
        </div>
        <div id="modalBackground" onClick={this.props.closeModal}>
        </div>
      </div>
    )
  }
}

const mapState = ({ piece }) => ({ piece })

const mapDispatch = (dispatch, ownProps) => {
  return {
    loadPieceData(x, y) {
      dispatch(fetchPiece(ownProps.xCoord, ownProps.yCoord))
    },
    inventorySubmission(event, id) {
      event.preventDefault();
      dispatch(updatePieceThunk({
        category: event.target.category.value,
        item: event.target.item.value,
        quantity: event.target.quantity.value,
        pieceId: id
      }, ownProps.xCoord, ownProps.yCoord))
      ownProps.closeModal()
    },
    deleteCrate(x, y) {
      dispatch(deletePieceThunk(ownProps.xCoord, ownProps.yCoord))
    }
  }
}


export default connect(mapState, mapDispatch)(Modal)
