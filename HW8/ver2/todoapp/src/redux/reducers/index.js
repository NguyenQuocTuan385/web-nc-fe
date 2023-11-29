import { combineReducers } from 'redux';
import TaskReducer from './Task/index.js';

const allReducers = combineReducers ({
  tasks: TaskReducer
});

export default allReducers;