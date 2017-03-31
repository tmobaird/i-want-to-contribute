import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SearchPage from './containers/SearchPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
