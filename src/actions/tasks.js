import * as actionTypes  from "../constants/ActionTypes";


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