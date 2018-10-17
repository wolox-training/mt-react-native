import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

function AuthenticatedRoute(props) {
  return props.authorization ? (
    <Route exact path={props.PATH} component={props.iflogged} />
  ) : (
    <Route exact path={props.PATH} component={props.default} />
  );
}

const mapStateToProps = state => ({
  authorization: state.login.authorization
});

export default connect(mapStateToProps)(AuthenticatedRoute);
