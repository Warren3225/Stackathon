import axios from 'axios';

const GET_PIECE = 'GET_PIECE';

const defaultPiece = {};

const getPiece = piece => ({ type: GET_PIECE, piece })


/**
 * THUNK CREATORS
 */
export const fetchPiece = (id) =>
    dispatch =>
        axios.get(`/api/pieces/${id}`)
            .then(res => dispatch(getPiece(res.data)))
            .catch(err => console.error(err))

export default function (state = defaultPiece, action) {
    switch (action.type) {
        case GET_PIECE: {
            return action.piece
        }
        default:
            return state;
    }
}