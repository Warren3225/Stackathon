import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPiece } from '../store/piece';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'


class crateDetailPane extends Component {
    constructor(props) {
        super(props)
    }
}

componentWillMount(){
    this.props.loadPieceData(this.props.xCoord, this.props.yCoord)
}
















const mapState = ({ piece }) => ({ piece })

const mapDispatch = (dispatch, ownProps) => {
    return {
        loadPieceData(x, y) {
            dispatch(fetchPiece(ownProps.xCoord, ownProps.yCoord))
        }
    }

    export default connect(mapState, mapDispatch)(Modal)