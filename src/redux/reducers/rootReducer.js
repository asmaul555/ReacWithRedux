import {combineReducers} from 'redux'
import productReducter from './productReducer';

const rootReducer=combineReducers({
    productReducer:productReducter
})


export default rootReducer;