import React from 'react';
import "./tasks.css";
import Collapsible from "../collapsible/Collapsible";
import { useState, useEffect } from "react";
import actions from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { toDisplayableDateFormat } from "../../utils/";

function Tasks() {
  //state
  let [ taskTitle, setTaskTitle ] = useState("");
  let [ taskDateTime, setTaskDateTime ] = useState("");
  let [ isNewTaskOpen, setIsNewTaskOpen ] = useState(false);
  let [ search, setSearch ] = useState("");

  //create dispatch function
  let dispatch = useDispatch();

  //run on first render
  useEffect(() => {
    dispatch(actions.fetchTasks());
  }, [dispatch]);

  //get state from redux store
  let tasks = useSelector(state => state.tasks);
  let filteredTasks = Object.values(tasks).filter(task => 
    task.taskTitle.toLowerCase().indexOf(search.toLowerCase()) >= 0);

  

  let onSaveClick = () => {
    //dispatch
    dispatch(actions.createTask({
      id: Math.floor(Math.random() * 10000000),
      taskTitle: taskTitle,
      taskDateTime: taskDateTime
    }));

    //clear
    setTaskTitle("");
    setTaskDateTime("");
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  let onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  let onDeleteClick = (task)  => {
    if (window.confirm("Are you sure to delete this task"))
    {
      dispatch(actions.deleteTask(task.id));
    }
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
              <label className="form-label" htmlFor="task-title">Task Title:</label>
              <div className="form-input">
                <input type="text" placeholder="Task Title" className="text-box" id="task-title" value={taskTitle} onChange={(event) => { setTaskTitle(event.target.value)}} />
              </div>
              
            </div>
            {/* form group ends */}

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-date-time">Task Date and Time:</label>
              <div className="form-input">
                <input type="datetime-local" placeholder="Task Date and Time" className="text-box" id="task-date-time" value={taskDateTime} onChange={(event) => { setTaskDateTime(event.target.value)}} />
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
          <input type="search" placeholder="Search" value={search} onChange={(event) => { setSearch(event.target.value); }} />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">

          {/* task starts */}
          {filteredTasks.map(task => <div className="task" key={task.id}>
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">{task.taskTitle}</span>
              </div>
              <div className="task-subtitle">
                <i className="far fa-clock"></i> <span className="task-subtitle-text">{toDisplayableDateFormat(task.taskDateTime)}</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete" onClick={() => { onDeleteClick(task); }}>&times;</button>
            </div>
          </div>)}
          {/* task ends */}

        </div>
      </div>
    </div>
  )
}

export default Tasks;