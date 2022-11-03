import * as actionTypes  from "../constants/action-types";

export const fetchTasks = () => {
return(dispatch, getState) => {
    var promise = fetch("http://localhost:7000/tasks", {
        method: "GET"})
        promise.then((response) => {

            // read response body
            var promise2 = response.json();
            promise2.then((responseData) => {
                console.log(responseData)
                dispatch({
                    type: actionTypes.FETCH_TASKS,
                    payload: response
            })
            
        })
}
)}
}

// actions creator is a function that returns an action object
export const createTask = (newTask) => {
    return {
        type: actionTypes.CREATE_TASK,
        payload: newTask
    }
};

export const deleteTask = (taskId) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: taskId
    }
}