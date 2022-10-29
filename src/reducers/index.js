import { tasksReducer } from "./task-reducers";
import { combineReducers } from "redux";

var allReducers = combineReducers({tasks: tasksReducer })

export default allReducers;