import Dashboard from '../../../components/Dashboard';
import React from 'react';
import {Route} from 'react-router-dom';

const AdminLayout = props => {
  let {component: MyComponent, name, ...remainProps} = props

  return (
    <Route {...remainProps} render={routeProps => {
      return (
        <Dashboard pathName={name}>
          <MyComponent {...routeProps} />
        </Dashboard>
      )
    }} />
  );
}

export default AdminLayout;
