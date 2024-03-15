import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { cartReducer } from "../reducers/cartReducers"

const reducer = combineReducers({
  cart: cartReducer,
})

const initialState = {
  cart: {
    cartItems: [],
  },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
