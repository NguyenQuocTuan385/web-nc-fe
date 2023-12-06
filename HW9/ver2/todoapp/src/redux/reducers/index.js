import { combineReducers } from 'redux';
import ToDoListReducer from './ToDoList/index.js';

const allReducers = combineReducers ({
  todolist: ToDoListReducer
});

export default allReducers;