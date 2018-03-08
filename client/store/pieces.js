import axios from 'axios';

//Action types
const GET_ALL_PIECES = 'GET_ALL_PIECES';
const DELETE_ALL_PIECES = 'DELETE_ALL_PIECES';
const DELETE_ALL_CRATE_PIECES = 'DELETE_ALL_CRATE_PIECES'
//---------------------------------------------
// const UPDATE_PIECE = 'UPDATE_PIECE';
const DELETE_PIECE = 'DELETE_PIECE';
const CREATE_PIECE = 'CREATE_PIECE';

//MAYBE YOU SHOULDNT BE ABLE TO UPDATE A PIECE

const defaultPieces = [];

//Action creators
const getAllPieces = pieces => ({ type: GET_ALL_PIECES, pieces })
const deleteAllPieces = () => ({ type: DELETE_ALL_PIECES })
const deleteAllCratePieces = (walls) => ({ type: DELETE_ALL_CRATE_PIECES, walls })
//---------------------------------------------
// const updatePiece = piece => ({ type: UPDATE_PIECE, piece })
const deletePiece = id => ({ type: DELETE_PIECE, id })
const createPiece = piece => {
    console.log('sdfjnsdf')
    return { type: CREATE_PIECE, piece }
}


//Thunks
export const fetchAllPieces = () =>
    dispatch =>
        axios.get('api/pieces')
            .then(res => dispatch(getAllPieces(res.data || defaultPieces)))
            .catch(err => console.log(error));

export const WipeAllPieces = () =>
    dispatch =>
        axios.delete('api/pieces/p/all')
            .then(() => dispatch(deleteAllPieces()))
            .catch(err => console.log(error));

export const WipeAllCratePieces = () =>
    dispatch =>
        axios.delete('api/pieces/p/crates')
            .then((res) => dispatch(deleteAllCratePieces(res.data)))
            .catch(err => console.log(error));

//---------------------------------------------
// export const updatePieceThunk = (piece, id) =>
//     dispatch =>
//         axios.put(`/api/pieces/${id}`, piece)
//             .then(res => dispatch(updatePiece(res.data || defaultPiece)))
//             .catch(err => console.error(err))

export const deletePieceThunk = (id) =>
    dispatch =>
        axios.delete(`/api/pieces/${id}`)
            .then(res => dispatch(removePiece(res.data || defaultPiece)))
            .catch(err => console.error(err))

export const createPieceThunk = (PieceToAdd) => {
    console.log('hello')
    return dispatch =>
        axios.post('/api/pieces', PieceToAdd)
            .then(res => {
                console.log('sdlfjndflsjf')
                dispatch(createPiece(res.data))
            })
            .catch(err => console.error(err))
}

//REDUCER
export default function (state = defaultPieces, action) {
    console.log(action);
    switch (action.type) {
        case GET_ALL_PIECES:
            return action.pieces;
        case DELETE_ALL_PIECES:
            return [];
        case DELETE_ALL_CRATE_PIECES:
            return action.walls
        // case UPDATE_PIECE:
        //     return state.map(piece => (action.id === piece.id ? action.piece : piece))
        case CREATE_PIECE:
            return [action.piece, ...state]
        case DELETE_PIECE:
            return state.filter(piece => piece.id !== action.id);
        default:
            return state
    }
}