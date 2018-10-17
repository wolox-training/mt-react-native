import React from 'react';
import { connect } from 'react-redux';

import Game from '../app/screens/Game/index';
import RegisterFromContainer from '../app/screens/LogIn/index';

const AuthenticatedRoute = props => {
  return props.auth !== '' ? <Game /> : <RegisterFromContainer />;
};

const mapStateToProps = state => ({
  auth: state.login.authorization
});

export default connect(mapStateToProps)(AuthenticatedRoute);
