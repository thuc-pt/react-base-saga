import {fork, take, call, put, delay, takeLatest, takeEvery, select} from 'redux-saga/effects';
import {fetchTasks, fetchTasksSuccess, fetchTasksFail, addTaskSuccess, addTaskFail, updateTaskSuccess, updateTaskFail, deleteTaskSuccess, deleteTaskFail} from '../actions/tasks';
import * as taskTypes from '../constants/tasks';
import {statusCode} from '../constants';
import * as tasksApi from '../apis/tasks';
import {showLoading, hideLoading} from '../actions/front';
import {hideModal} from '../actions/modal';
import {flashSuccess} from '../helper/toastify';

function* fetchListTasks() {
  while (true) {
    const action = yield take(taskTypes.PULL_TASKS)
    let {params} = action
    yield put(showLoading())
    const resp = yield call(tasksApi.requestGetTasks, params)
    const {status, data} = resp
    if (status === statusCode.success) {
      yield put(fetchTasksSuccess(data))
    }
    else {
      yield put(fetchTasksFail(data))
    }
    yield delay(500)
    yield put(hideLoading())
  }
}

function* filterTasks({payload}) {
  yield delay(700)
  let {keyword} = payload
  yield put(fetchTasks({
    q: keyword
  }))
}

function* addNewTask({payload}) {
  yield put(showLoading())
  const resp = yield call(tasksApi.requestCreateTask, payload.data)
  const {status, data} = resp
  if (status === statusCode.created) {
    yield put(addTaskSuccess(data))
    yield put(hideModal())
  } else {
    yield put(addTaskFail(data))
  }
  yield delay(500)
  yield put(hideLoading())
}

function* updateTask({payload}) {
  yield put(showLoading())
  const taskEdit = yield select(state => state.tasks.taskEdit)
  const resp = yield call(tasksApi.requestUpdateTask, payload.data, taskEdit.id)
  const {data, status} = resp
  if (status === statusCode.success) {
    yield put(updateTaskSuccess(data))
    yield put(hideModal())
  } else {
    yield put(updateTaskFail())
  }
  yield delay(500)
  yield put(hideLoading())
  flashSuccess("Update success")
}

function* deleteTask({payload}) {
  yield put(showLoading())
  const resp = yield call(tasksApi.requestDeleteTask, payload.id)
  const {status} = resp
  if (status === statusCode.success) {
    yield put(deleteTaskSuccess(payload.id))
    yield put(hideModal())
  } else {
    yield put(deleteTaskFail())
  }
  yield delay(500)
  yield put(hideLoading())
  flashSuccess("Delete success")
}

function* rootSaga() {
  yield fork(fetchListTasks)
  yield takeLatest(taskTypes.FILTER_TASKS, filterTasks)
  yield takeEvery(taskTypes.ADD_TASK, addNewTask)
  yield takeEvery(taskTypes.UPDATE_TASK, updateTask)
  yield takeEvery(taskTypes.DELETE_TASK, deleteTask)
}

export default rootSaga;
