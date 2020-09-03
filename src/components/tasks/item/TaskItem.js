import React from 'react';
import {withStyles, Card, CardContent, CardActions} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';
import {compose} from 'redux';

function TaskItem(props) {
  let {status, tasks, classes, onEditTask, onDeleteTask} = props;
  let txtColor = null;
  switch(status.value) {
    case "0":
      txtColor = "text-warning"
      break
    case "1":
      txtColor = "text-danger"
      break
    case "2":
      txtColor = "text-success"
      break
    default:
      break
  }

  return (
    tasks.map((task, index) => {
      return (
        <Card key={index} className={classes.taskItem}>
          <CardContent>
            <div className={classes.flexBoxBetween}>
              <h2><strong>{task.name}</strong></h2>
              <div className={txtColor}>{status.name}</div>
            </div>
            <p className="text-secondary">{task.description}</p>
          </CardContent>
          <CardActions className={classes.flexEnd}>
            <Fab color="primary" aria-label="edit" size="small" className="none-outline" onClick={() => onEditTask(task)}>
              <EditIcon />
            </Fab>
            <Fab color="secondary" aria-label="delete" size="small" className="none-outline" onClick={() => onDeleteTask(task)}>
              <DeleteIcon />
            </Fab>
          </CardActions>
        </Card>
      )
    })
  );
}

export default compose(
  withStyles(styles),
)(TaskItem);
