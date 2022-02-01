import {applyMiddleware, createStore} from 'redux'
import reducers from "./reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
// redux-thunk is used to run asynchronus funciton
// composeWithDevTools()
export const store=createStore(reducers,{},composeWithDevTools())