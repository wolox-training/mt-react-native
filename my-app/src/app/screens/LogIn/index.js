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
  logged: state.login.logged,
  Authorization: state.login.Authorization
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
