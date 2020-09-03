import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../../commons/Theme';
import '../../App.scss';
import {Provider} from 'react-redux';
import configStore from '../../redux/configStore';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../helper/toastify';
import GlobalLoading from '../../components/GlobalLoading';
import ModalHelper from '../../components/ModalHelper';
import {BrowserRouter, Switch} from 'react-router-dom';
import {ADMIN_ROUTES} from '../../constants';
import AdminLayout from '../../commons/Layout/AdminLayout';

function App() {
  function renderAdminRoutes() {
    let xhtml = null
    xhtml = ADMIN_ROUTES.map(route => {
      return <AdminLayout
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name} />
    })
    return xhtml
  }

  return (
    <Provider store={configStore()}>
      <GlobalLoading />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            {renderAdminRoutes()}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
      <ToastContainer position="top-center" />
      <ModalHelper />
    </Provider>
  );
}

export default App;
