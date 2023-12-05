import * as types from './actionTypes';

const initialState = {
    tasks: [],
    filteredTasks: []
};

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                filteredTasks: []
            }
        case types.MARK_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task),
                filteredTasks: []
            }
        case types.FILTER_TASK:
            return {
                ...state,
                filteredTasks: state.tasks.filter(task => task.title.toLowerCase().includes(action.payload.toLowerCase())),
                tasks: state.tasks
            }
        case types.SET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                filteredTasks: []
            }
        default:
            return state;
    }
}
export default ToDoListReducer;