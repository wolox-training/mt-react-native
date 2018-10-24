import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

function AuthenticatedRoute({ authorization, defaultComp, ifLoggedComp, ...props }) {
  return authorization ? (
    <Route exact path={props.PATH} component={ifLoggedComp} />
  ) : (
    <Route exact path={props.PATH} component={defaultComp} />
  );
}

const mapStateToProps = state => ({
  authorization: state.login.authorization
});

export default connect(mapStateToProps)(AuthenticatedRoute);
