import React from 'react';
import { connect } from 'react-redux';

import Game from '../app/screens/Game/index';
import RegisterFromContainer from '../app/screens/LogIn/index';

function AuthenticatedRoute({ auth }) {
  return auth !== '' ? <Game /> : <RegisterFromContainer />;
}

const mapStateToProps = state => ({
  auth: state.login.authorization
});

export default connect(mapStateToProps)(AuthenticatedRoute);
