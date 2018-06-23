import { combineReducers } from 'redux'
import items from '../Reducers/items'
import promocodes from '../Reducers/Promocodes'

export default combineReducers({
    items,
    promocodes
})