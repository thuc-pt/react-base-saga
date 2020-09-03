import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styles from './styles';
import {ADMIN_ROUTES} from '../../../constants';
import {NavLink} from 'react-router-dom';

function TemporaryDrawer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const {classes} = props

  function toggleDrawer(open) {
    setIsOpen(open);
  };

  const list = (
    <div onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
      {ADMIN_ROUTES.map((route, index) => (
        <NavLink key={index} to={route.path} activeClassName={classes.selected} exact={route.exact} className={classes.navLink}>
          {route.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
      {list}
    </Drawer>
  );
}

export default withStyles(styles)(TemporaryDrawer);
