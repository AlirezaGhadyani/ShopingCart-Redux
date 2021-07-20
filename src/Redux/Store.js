import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, singleProductReducer } from "./Reducers";

const reducers = combineReducers( {
    products: productsReducer,
    singleProduct: singleProductReducer
} );

const store = createStore( reducers, composeWithDevTools( applyMiddleware( thunk ) ) );

export default store;