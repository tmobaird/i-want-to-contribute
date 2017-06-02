/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store/configureStore';
/* The following is one way to include bootstrap in the project, but this way has a
 * somewhat different styling for buttons. Currently using the CDN stylesheets.
 * This is configured in the public/index.html file.
 */
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
