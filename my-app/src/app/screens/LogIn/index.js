import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from '../../../../../../../../Library/Caches/typescript/3.1/node_modules/redux';
import Game from '../Game/index';
import { makeALogInRequest } from '../../../redux/login/actions';

import LogIn from './layout';

class RegisterFromContainer extends Component {
  submit = values => {
    this.props.makeALogInRequest(values);
  };

  render() {
    return this.props.logged ? <Game /> : <LogIn onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => ({
  logged: state.loginReducer.logged,
  mail: state.loginReducer.mail,
  password: state.loginReducer.password,
  sesion: state.loginReducer.sesion,
  header: state.loginReducer.header
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
