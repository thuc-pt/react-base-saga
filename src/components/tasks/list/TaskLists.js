import React from 'react';
import {withStyles, Grid, Box} from '@material-ui/core';
import styles from './styles';
import TaskItem from '../item/TaskItem';

function TaskLists(props) {
  let {statuses, tasks, onEditTask, onDeleteTask} = props;
  return (
    <Grid container spacing={3}>
      {
        statuses.map((status, index) => {
          let results = (tasks ? tasks : []).filter(item => item.status === status.value);
          return (
            <Grid item md={4} key={index}>
              <Box mt={2} mb={1} ml={1}>
                <strong>{status.name}</strong>
              </Box>
              <TaskItem status={status} tasks={results} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
            </Grid>
          )
        })
      }
    </Grid>
  );
}

export default withStyles(styles)(TaskLists);
