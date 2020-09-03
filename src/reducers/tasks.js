import * as types from '../constants/tasks';
import {flashDanger, flashSuccess} from '../helper/toastify';

var initState = [];

var tasks = (state = initState, action) => {
  switch(action.type) {
    case types.PULL_TASKS:
      state = action.tasks
      return {
        listTasks: [...state]
      }
    case types.PULL_TASKS_SUCCESS:
      state = action.data
      return {
        listTasks: [...state]
      }
    case types.PULL_TASKS_FAIL:
      flashDanger("Network error")
      return state = [];
    case types.FILTER_TASKS_SUCCESS:
      return [...action.payload]
    case types.ADD_TASK:
      return {
        ...state
      }
    case types.ADD_TASK_SUCCESS:
      flashSuccess("Create success")
      let {data} = action.payload
      return {
        listTasks: state.listTasks.concat([data])
      }
    case types.ADD_TASK_FAIL:
      flashDanger("Network error")
      return {
        listTasks: [...state]
      }
    case types.GET_TASK_EDITTING:
      let {task} = action.payload
      return {
        ...state,
        taskEdit: task
      }
    case types.UPDATE_TASK:
      return {
        ...state
      }
    case types.UPDATE_TASK_SUCCESS:
      let dataEdit = action.payload.data
      let {listTasks} = state
      let index = listTasks.findIndex(item => {return item.id === dataEdit.id})
      return {
        listTasks: [...listTasks.slice(0, index), dataEdit, ...listTasks.slice(index + 1)]
      }
    case types.UPDATE_TASK_FAIL:
      flashDanger("Network error")
      return {
        ...state
      }
    case types.DELETE_TASK:
      return {
        ...state,
        id: action.payload.id
      }
    case types.DELETE_TASK_SUCCESS:
      let idDelete = action.payload.data
      return {
        listTasks: state.listTasks.filter(item => {return item.id !== idDelete})
      }
    case types.DELETE_TASK_FAIL:
      flashDanger("Network error")
      return {
        ...state
      }
    default:
      return {
        ...state
      };
  }
};

export default tasks;
