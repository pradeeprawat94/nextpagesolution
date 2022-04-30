import { createStore } from "redux";
import {applyMiddleware,combineReducers} from  'redux'
import thunk from 'redux-thunk'
import {cartReducer } from './reducers/cartReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware  =[thunk]


const reducers = combineReducers(
    {
        cart:cartReducer
    }
)

const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)))

export default store