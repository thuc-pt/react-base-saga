import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import * as constants from '../../constants/index';
import TaskLists from '../../components/tasks/list/TaskLists';
import {connect} from 'react-redux';
import * as tasksAction from '../../actions/tasks';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../TaskForm';
import * as modalActions from '../../actions/modal';
import ConfirmDelete from '../../components/ConfirmDelete';

function TaskBoard(props) {
  let {
    getListTasks,
    listTasks,
    filterTask,
    openModal,
    changeTitleModal,
    changeContentModal,
    getTask,
    deleteTask
  } = props

  useEffect(() => {
    getListTasks()
  }, [getListTasks]);

  function handleOpenForm() {
    getTask(null)
    openModal()
    changeTitleModal('Add new task')
    changeContentModal(<TaskForm />)
  }

  function onFilterTask(e) {
    let {value} = e.target
    filterTask(value)
  }

  function handleEditTask(task) {
    getTask(task)
    openModal()
    changeTitleModal('Edit task')
    changeContentModal(<TaskForm />)
  }

  function handleDeleteTask(task) {
    openModal()
    changeTitleModal('Delete task')
    changeContentModal(<ConfirmDelete onDeleteTask={() => onDeleteTask(task)} />)
  }

  function onDeleteTask(task) {
    deleteTask(task.id)
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="none-outline mgt--10"
        onClick={handleOpenForm}>
        <AddIcon className="mgr--5" />Thêm mới công việc
      </Button>
      <br /><br />
      <SearchBox onFilterValue={onFilterTask} />
      <br />
      <TaskLists statuses={constants.statusTitles} tasks={listTasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listTasks: state.tasks.listTasks,
    taskEdit: state.tasks.taskEdit
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListTasks: () => {
      dispatch(tasksAction.fetchTasks())
    },
    filterTask: (value) => {
      dispatch(tasksAction.filterTasks(value))
    },
    openModal: () => {
      dispatch(modalActions.showModal())
    },
    changeTitleModal: (title) => {
      dispatch(modalActions.changeTitle(title))
    },
    changeContentModal: (component) => {
      dispatch(modalActions.changeContent(component))
    },
    getTask: task => {
      dispatch(tasksAction.getTaskEditting(task))
    },
    deleteTask: id => {
      dispatch(tasksAction.deleteTask(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
