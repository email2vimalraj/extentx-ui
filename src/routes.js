import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
      <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="about" component={About} />
        <Route path="*" component={NotFound} />
      </Route>
  </Router>
);

export default Routes;
