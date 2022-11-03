import React from 'react';
import "./tasks.css";
import Collapsible from "../collapsible/Collapsible";
import { useState } from "react";
import actions from '../../actions';
import {useSelector, useDispatch} from "react-redux"
import { tasksReducer } from '../../reducers/task-reducers';
import {toDisplayableDateFormat} from "../../utils/index";


function Tasks() {

  // get the state of your combineReducers

  let tasks = useSelector(state => state.tasks);

  //state
  let [taskTitle, setTaskTitle] = useState("");
  let [taskDateTime, setTaskDateTime] = useState("");
  let [ isNewTaskOpen, setIsNewTaskOpen ] = useState(false);

    // create dispatch function
    let dispatch =  useDispatch();

  let onSaveClick = () => {
    // dispatch an action called create Tasks.    
  dispatch(actions.createTask({
  id: Math.floor(Math.random() * 10000000),
  taskTitle: taskTitle,
  taskDateTime: taskDateTime,
  isNewTaskOpen: isNewTaskOpen
}));
//clear the screen
setTaskTitle("");
setTaskDateTime("");
setIsNewTaskOpen(false);
}

let onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>

          <div className="create-button-container">
            {!isNewTaskOpen? <button className="button create-button" onClick={() => { setIsNewTaskOpen(!isNewTaskOpen); }}>
              <i className="fa fa-calendar-plus"></i>
              &nbsp;&nbsp;
              Create
            </button>: null}
          </div>
        </div>

        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" 
              htmlFor="task-title">Task Title:</label>
              <div className="form-input">
                <input type="text" placeholder="Task Title"
                 className="text-box" id="task-title" value={taskTitle} onChange={(event) =>
                {setTaskTitle(event.target.value)}} />
              </div>
              
            </div>
            {/* form group ends */}

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-date-time">Task Date and Time:</label>
              <div className="form-input">
                <input type="datetime-local"
                 placeholder="Task Date and Time"
                  className="text-box" 
                  id="task-date-time" value={taskDateTime} onChange={(event) =>
                    {setTaskDateTime(event.target.value)}} />
              </div>
            </div>
            {/* form group ends */}

            <div className="button-group">
              <button className="button save-button" onClick={() => { onSaveClick(); }}>
                <i className="fa fa-save"></i>&nbsp;&nbsp;
                Save Task
              </button>

              <button className="button cancel-button" onClick={() => { onCancelClick(); }}>
                <i className="fa fa-window-close"></i>&nbsp;&nbsp;
                Cancel
              </button>
            </div>
          </div>
        </Collapsible>

        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">

          {/* task starts */}

{tasks.map(task => <div className="task" key ={task.id}>
            <div className="task-body" >
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">{task.taskTitle}</span>
              </div>
              <div className="task-subtitle">
                <i className="far fa-clock"></i>
                 <span className="task-subtitle-text">
                  {toDisplayableDateFormat(task.taskDateTime)}
                  </span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">&times;</button>
            </div>
          </div>
)}
      {/* task ends */}
        </div>
      </div>
    </div>
  )
}

export default Tasks;