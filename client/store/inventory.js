import axios from 'axios';

//ACTION TYPES

const GET_INVENTORIES = 'GET_INVENTORIES';
const GET_INVENTORY_OF_PIECE = 'GET_INVENTORY_OF_PIECE';
const POST_INVENTORY = 'POST_INVENTORY';
const EDIT_INVENTORY = 'EDIT_INVENTORY';

//INITIAL STATE

const defaultInventories = [];

//ACTION CREATORS
const getInventories = inventories => ({ type: GET_INVENTORIES, inventories })
const getInventoryForPiece = inventory => ({ type: GET_INVENTORY_OF_PIECE, inventory })
const postInventory = inventory => ({ type: POST_INVENTORY, inventory })
const editInventory = inventory => ({ type: EDIT_INVENTORY, inventory })


//THUNK CREATORS

export const getInventoriesByCategoryThunk = (category) =>
    dispatch =>
        axios.get(`/api/inventory/category/${category}`)
            .then(res => dispatch(getInventories(res.data || defaultInventories)))
            .catch(err => console.error(err));

export const getInventoriesByItemThunk = (item) =>
    dispatch =>
        axios.get(`/api/inventory/item/${item}`)
            .then(res => dispatch(getInventories(res.data || defaultInventories)))
            .catch(err => console.error(err));

export const getInventoriesThunk = () =>
    dispatch =>
        axios.get(`/api/inventory/`)
            .then(res => dispatch(getInventories(res.data || defaultInventories)))
            .catch(err => console.error(err));


export const getInventoryForPieceThunk = (x, y) =>
    dispatch =>
        axios.get(`/api/inventory/${x}/${y}`)
            .then(res => dispatch(getInventoryForPiece(res.data || defaultInventories)))
            .catch(err => console.error(err));

export const postInventoryThunk = (inventory, x, y) =>
    dispatch =>
        axios.post(`/api/inventory/${x}/${y}`, inventory)
            .then(res => dispatch(postInventory(res.data || defaultInventories)))
            .catch(err => console.error(err));

export const editInventoryThunk = (id, inventory) =>
    dispatch =>
        axios.put(`/api/inventory/${id}`, inventory)
            .then(res => dispatch(editInventory(res.data || defaultInventories)))
            .catch(err => console.error(err));

//REDUCERS

export default function (state = defaultInventories, action) {
    switch (action.type) {
        case GET_INVENTORIES:
            return action.inventories
        case GET_INVENTORY_OF_PIECE:
            return action.inventory
        case POST_INVENTORY:
            return [...state, action.inventory];
        case EDIT_INVENTORY:
            return state.map(inventory => (action.id === inventory.id ? action.inventory : inventory))
        default:
            return state
    }
}
//test
