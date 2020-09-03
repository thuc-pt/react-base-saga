import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as taskTypes from '../../constants/tasks';
import renderTextField from '../../components/FormHelper/TextField';
import renderSelectField from '../../components/Select';
import validate from './validate';
import * as taskActions from '../../actions/tasks';
import {statusTitles} from '../../constants';

function TaskForm(props) {
  let {classes, invalid, submiting, handleSubmit, addNewTask, updateTask} = props;

  function submitForm(data) {
    let {initialValues} = props
    if (initialValues && initialValues.id) {
      updateTask(data)
    } else {
      data.status = statusTitles[0].value
      addNewTask(data)
    }
  }

  function renderSelectStatus() {
    let xhtml = null
    let {initialValues} = props
    if (initialValues && initialValues.id) {
      xhtml = <Field
        name="status"
        component={renderSelectField}
        label="Status"
        className={classes.fieldStyle}>
        <option value="" />
        <option value={0}>Ready</option>
        <option value={1}>In Progress</option>
        <option value={2}>Completed</option>
      </Field>
    }
    return xhtml
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field
        name="name"
        label="Name"
        component={renderTextField}
        className={classes.fieldStyle} />
      <Field
        name="description"
        label="Description"
        component={renderTextField}
        className={classes.fieldStyle} />
      {renderSelectStatus()}
      <div className="text-center">
        <Button
          type="submit"
          color="primary"
          disabled={invalid || submiting}
          variant="contained"
          className="none-outline">Save</Button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    initialValues: state.tasks.taskEdit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTask: data =>  {
      dispatch(taskActions.addTask(data))
    },
    updateTask: data => {
      dispatch(taskActions.updateTask(data))
    }
  }
}

const withReduxForm = reduxForm({
  form: taskTypes.FORM_NAME,
  validate
})

const convertToProps = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withStyles(styles),
  convertToProps,
  withReduxForm,
)(TaskForm);
