import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from "./reducers/index";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk), devToolsEnhancer());

export default store;
