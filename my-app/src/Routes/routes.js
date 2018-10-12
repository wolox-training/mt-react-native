import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticatedRounter from './AuthenticatedRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthenticatedRounter} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
};

export default Routes;
