import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import { fetchByCategoryPieces, fetchbyItemPieces } from '../store/pieces'


class BottomPane extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='olive' textAlign='center'>
                            Get Inventory Data
        </Header>
                        <Form onSubmit={this.props.onCategorySearch}>
                            <label>Category</label>
                            <Form.Input
                                name='category'
                                placeholder='ex. Electronics' />
                            <Button type='submit'>Submit</Button>
                        </Form>

                        <Form onSubmit={this.props.onItemSearch}>
                            <label>Item</label>
                            <Form.Input
                                name='item'
                                placeholder='ex. Laptops' />
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapState = null;

const mapDispatch = (dispatch, ownProps) => {
    return {
        onCategorySearch(event) {
            event.preventDefault();
            dispatch(fetchByCategoryPieces(event.target.category.value))
        },
        onItemSearch(event) {
            event.preventDefault();
            dispatch(fetchbyItemPieces(event.target.item.value))
        }
    }
}

export default connect(mapState, mapDispatch)(BottomPane);
