import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import { fetchPiece } from '../store/piece';
import { connect } from 'react-redux';

class Modal extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount(){
    this.props.getPiece(this.props.xCoord, this.props.yCoord)
    console.log(this.props)
  }

  render() {
    if(!this.props.piece.id){
      return ('')
    }
    return (
      <div>
        <div id="modal">
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='olive' textAlign='center'>
                Inventory Data
              </Header>
              <div>
                {this.props.piece.id}
              </div>
              <div>
              </div>
              <Form>
                <Form.Field>
                  <label>Category</label>
                  <input placeholder='ex. Electronics' />
                </Form.Field>
                <Form.Field>
                  <label>Item</label>
                  <input placeholder='ex. X-Box' />
                </Form.Field>
                <Form.Field>
                  <label>Quantity</label>
                  <input placeholder='ex. 50' />
                </Form.Field>
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
const mapDispatch = (dispatch) => { return ({
  getPiece(x, y){ dispatch(fetchPiece(x, y))},
})}

export default connect(mapState, mapDispatch)(Modal)