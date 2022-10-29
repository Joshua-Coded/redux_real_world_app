import * as actionTypes  from "../constants/ActionTypes";

// actions creator is a function that returns an action object
export const createTask = () => {
    return {
        type: actionTypes.CREATE_TASK,
        payload: newTask
    }
};

export const deleteTask = () => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: taskId
    }
}