import { combineReducers } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./counter";



const rootReducer = combineReducers({
    counter: counterReducer
})

export { rootReducer }