import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, singleProductReducer, cartReducer } from "./Reducers";

const reducers = combineReducers( {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer
} );

const store = createStore( reducers, composeWithDevTools( applyMiddleware( thunk ) ) );

export default store;