import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeALogInRequest } from '../../../redux/login/actions';

import LogIn from './layout';

class RegisterFromContainer extends Component {
  render() {
    return <LogIn onSubmit={this.props.makeALogInRequest} />;
  }
}

const mapStateToProps = state => ({
  logged: state.loginReducer.logged,
  Authorization: state.loginReducer.Authorization
});

function mapDispatchToProps(dispatch) {
  return {
    makeALogInRequest: value => {
      dispatch(makeALogInRequest(value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFromContainer);
