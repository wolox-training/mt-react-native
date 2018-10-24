import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PATH } from '../app/utils/consts/routes';
import Game from '../app/screens/Game/index';
import Login from '../app/screens/LogIn/index';

import AuthenticatedRoute from './AuthenticatedRoute';

function Routes() {
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute path={PATH} defaultComp={Login} ifLoggedComp={Game} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default Routes;
