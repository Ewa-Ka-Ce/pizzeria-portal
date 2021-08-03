import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer.js';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {main: '#990000'},
    secondary: {main: '#ffb3b3'},
  },
});


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
   <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;