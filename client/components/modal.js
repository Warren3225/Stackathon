import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchPiece } from '../store/piece'
import { updatePieceThunk } from '../store/pieces'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadPieceData(this.props.xCoord, this.props.yCoord)
  }

  render() {
    let pieceId = this.props.piece.id
    console.log('props', this.props);
    console.log('state', this.state);
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
                  placeholder={this.props.piece.category} />
                <label>Item</label>
                <Form.Input
                  name='item'
                  placeholder={this.props.piece.item} />
                <label>Quantity</label>
                <Form.Input
                  name='quantity'
                  placeholder={this.props.piece.quantity} />
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <div id="modalBackground">
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
    }
  }
}


export default connect(mapState, mapDispatch)(Modal)
