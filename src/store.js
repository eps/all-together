// import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reddit from './store/topics/reducer'

const reducer = combineReducers({
  reddit
})
const store =
  createStore(reducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

export default store
