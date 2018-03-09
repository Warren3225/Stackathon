import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { postInventoryThunk } from '../store/inventory'
import { fetchPiece } from '../store/piece'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.getPiece(this.props.xCoord, this.props.yCoord)
    console.log(this.props)
  }

  // componentWillMount() {
  //   const pieceID = this.props.loadPieceData(this.props.xCoord, this.props.yCoord)
  // }

  render() {
    let pieceId = this.props.piece.id
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
                  placeholder='category' />
                <label>Item</label>
                <Form.Input
                  name='item'
                  placeholder='item' />
                <label>Quantity</label>
                <Form.Input
                  name='quantity'
                  placeholder='Quantity' />
                <Button type='submit'>Submit</Button>
              </Form>
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
      dispatch(postInventoryThunk({
        category: event.target.category.value,
        item: event.target.item.value,
        quantity: event.target.quantity.value,
        pieceId: id
      }, ownProps.xCoord, ownProps.yCoord))
    }
  }
}

// export default connect(mapState, mapDispatch)(Modal);
// =======
// const mapState = ({ piece }) => ({ piece })
// const mapDispatch = (dispatch) => { return ({
//   getPiece(x, y){ dispatch(fetchPiece(x, y))},
// })}

export default connect(mapState, mapDispatch)(Modal)
