import { combineReducers } from 'redux';
import ToDoListReducer from './ToDoList/index.js';
import StatusReducer from './Status/index.js';

const allReducers = combineReducers ({
  todolist: ToDoListReducer,
  status: StatusReducer
});

export default allReducers;