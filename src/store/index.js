import {configureStore} from "@reduxjs/toolkit"
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";


var store = configureStore({reducer: allReducers}, composeWithDevTools());
export default store;