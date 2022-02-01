import { combineReducers } from 'redux';
import amountReducer from "./amountReducer";

 const reducers= combineReducers({
    amount2: amountReducer
    // Can add multiple reducers & combine them into one
}) 
export default reducers