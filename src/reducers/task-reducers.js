import { initialTasks } from "../data/tasks";
import * as actionTypes from "../constants/ActionTypes";

//reducer is a function that receives an action and returns new state.
export const tasksReducer = (state = initialTasks, action) => {
  switch (action.type)
  {
    case actionTypes.CREATE_TASK:
      return [ ...state, action.payload];
    
    case actionTypes.DELETE_TASK:
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};