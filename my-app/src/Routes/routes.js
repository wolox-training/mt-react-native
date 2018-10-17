import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PATH } from '../app/utils/consts';

import AuthenticatedRounter from './AuthenticatedRoute';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH} component={AuthenticatedRounter} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default Routes;
