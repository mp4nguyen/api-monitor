import Perf from 'react-addons-perf'
window.Perf = Perf;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from "react-router";

import ReduxToastr from 'react-redux-toastr'
import injectTapEventPlugin from 'react-tap-event-plugin';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';


import routes from './routes';
import reducers from './redux/reducers';
import socketIOMiddleware from './redux/middlewares/socketIOMiddleware';

import MySchedulerExample from './common_uis/example/myscheduler';
import MySchedulerWithRedux from './common_uis/example/MySchedulerWithRedux';
import PatientSearchExample from './common_uis/example/PatientSearchExample';

import Board from './common_uis/dnd/Board.component';
import {observe} from './common_uis/dnd/game';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise,logger(),thunk,socketIOMiddleware)(createStore);

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});




ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <Router history={browserHistory} routes={routes}>
        </Router>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
        />
      </div>
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.main-app'));
