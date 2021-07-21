import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, singleProductReducer, cartReducer, userStepInfoReducer } from "./Reducers";

const reducers = combineReducers( {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    userInfo: userStepInfoReducer
} );

const store = createStore( reducers, composeWithDevTools( applyMiddleware( thunk ) ) );

export default store;