import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { postInventoryThunk } from '../store/inventory'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
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
              <Form onSubmit={this.props.inventorySubmission}>
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
        <div id="modalBackground" onClick={this.props.openModal}>
        </div>
      </div>
    )
  }
}

const mapState = ({ piece, pieces }) => ({ piece, pieces })

const mapDispatch = (dispatch, ownProps) => {
  return {
    inventorySubmission(event) {
      event.preventDefault();
      console.log(ownProps)
      dispatch(postInventoryThunk({
        category: event.target.category.value,
        item: event.target.item.value,
        quantity: event.target.quantity.value
      }, ownProps.xCoord, ownProps.yCoord))
    }
  }
}

export default connect(mapState, mapDispatch)(Modal);