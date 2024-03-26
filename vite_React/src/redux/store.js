import {createStore,combineReducers,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'


import { getProductReducer,getProductDetailReducer } from './redusers/productReducer'



const reducer = combineReducers({
    getProduts : getProductReducer,
    getProductDetail:getProductDetailReducer
})

const middleware = [thunk]


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store