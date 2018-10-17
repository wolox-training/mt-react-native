import React from 'react';
import { connect } from 'react-redux';

import Game from '../app/screens/Game/index';
import RegisterFromContainer from '../app/screens/LogIn/index';

const AuthenticatedRoute = props => {
  return props.logged ? <Game /> : <RegisterFromContainer />;
};

const mapStateToProps = state => ({
  logged: state.login.logged
});

export default connect(mapStateToProps)(AuthenticatedRoute);
