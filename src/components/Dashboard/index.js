import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './styles';
import {withStyles} from '@material-ui/core';

const Dashboard = props => {
  let {classes, children, pathName} = props

  return (
    <div>
      <Header pathName={pathName} />
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes.wrapperContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
