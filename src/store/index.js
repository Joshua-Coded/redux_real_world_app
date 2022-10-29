import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from '@reduxjs/toolkit';

var store = configureStore({reducer: allReducers}, composeWithDevTools());
export default store;