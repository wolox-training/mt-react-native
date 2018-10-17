import React from 'react';
import { connect } from 'react-redux';

import actionCreator from '../../../redux/login/actions';

import LogIn from './layout';

const RegisterFromContainer = props => <LogIn onSubmit={props.makeALogInRequest} />;

const mapStateToProps = state => ({
  authorization: state.login.authorization
});

function mapDispatchToProps(dispatch) {
  return {
    makeALogInRequest: value => {
      dispatch(actionCreator.makeALogInRequest(value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFromContainer);
