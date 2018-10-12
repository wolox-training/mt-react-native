import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Game from '../app/screens/Game/index';
import RegisterFromContainer from '../app/screens/LogIn/index';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => (props.logged ? <Game /> : <RegisterFromContainer />)} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  logged: state.loginReducer.logged
});

export default connect(mapStateToProps)(Routes);
