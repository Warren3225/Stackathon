import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'


class BottomPane extends React.Component {
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
                            Inventory Data
        </Header>
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
        )
    }

}
export default BottomPane