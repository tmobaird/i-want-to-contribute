import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import SearchPage from './containers/SearchPage';
import AboutPage from './components/AboutPage';
import ContributorsPage from './components/ContributorsPage';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => {
  return(
    <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={SearchPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contributors" component={ContributorsPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </App>
    </BrowserRouter>
  )
};

export default Routes;
