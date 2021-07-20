import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from './Reducers';

const store = createStore( productReducer, composeWithDevTools( applyMiddleware( thunk ) ) );

export default store;