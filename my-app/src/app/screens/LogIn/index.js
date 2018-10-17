import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeALogInRequest } from '../../../redux/login/actions';

import LogIn from './layout';

class RegisterFromContainer extends Component {
  submit = values => {
    this.props.makeALogInRequest(values);
  };

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
    makeALogInRequest: bindActionCreators(makeALogInRequest, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFromContainer);
