import * as types from '../constants/tasks';

export const fetchTasks = (params = {}) => {
  return {
    type: types.PULL_TASKS,
    tasks: [],
    params
  }
};

export const fetchTasksSuccess = (data) => {
  return {
    type: types.PULL_TASKS_SUCCESS,
    data
  }
};

export const fetchTasksFail = (error) => {
  return {
    type: types.PULL_TASKS_FAIL,
    error
  }
};

export const filterTasks = keyword => {
  return {
    type: types.FILTER_TASKS,
    payload: {
      keyword
    }
  }
};

export const filterTasksSuccess = data => {
  return {
    type: types.FILTER_TASKS_SUCCESS,
    payload: {
      data
    }
  }
};

export const addTask = data => {
  return {
    type: types.ADD_TASK,
    payload: {
      data
    }
  }
};

export const addTaskSuccess = data => {
  return {
    type: types.ADD_TASK_SUCCESS,
    payload: {
      data
    }
  }
};

export const addTaskFail = error => {
  return {
    type: types.ADD_TASK_FAIL,
    payload: {
      error
    }
  }
};

export const getTaskEditting = task => {
  return {
    type: types.GET_TASK_EDITTING,
    payload: {
      task
    }
  }
};

export const updateTask = data => {
  return {
    type: types.UPDATE_TASK,
    payload: {
      data
    }
  }
};

export const updateTaskSuccess = data => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload: {
      data
    }
  }
};

export const updateTaskFail = error => {
  return {
    type: types.UPDATE_TASK_FAIL,
    payload: {
      error
    }
  }
};

export const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    payload: {
      id
    }
  }
};

export const deleteTaskSuccess = data => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    payload: {
      data
    }
  }
};

export const deleteTaskFail = error => {
  return {
    type: types.DELETE_TASK_FAIL,
    payload: {
      error
    }
  }
};
