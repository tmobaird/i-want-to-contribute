import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import './styles/App.css';
import SearchPage from './containers/SearchPage';
import AboutPage from './components/AboutPage';
import ContributorsPage from './components/ContributorsPage';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => {
  return(
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contributors" component={ContributorsPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default Routes;
