export const ADD_TASK = 'ADD_TASK';
export const MARK_TASK = 'MARK_TASK';
export const FILTER_TASK = 'FILTER_TASK';
export const SET_TASKS = 'SET_TASKS';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const markTask = (id) => {
    return {
        type: MARK_TASK,
        payload: id
    }
}

export const filterTask = (keyword) => {
    return {
        type: FILTER_TASK,
        payload:keyword
    }
}

export const setTasks = (tasks) => {
    return {
        type : SET_TASKS,
        payload : tasks
    }
}
