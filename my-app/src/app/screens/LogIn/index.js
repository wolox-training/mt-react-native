import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../../config/api';
import Game from '../Game/index';
import { markAsLoggedIn } from '../../../redux/login/actions';

import LogIn from './layout';

class RegisterFromContainer extends Component {
  alertLogIn = (res, values) => {
    if (res.ok && res.data.length > 0) {
      this.props.dispatch(markAsLoggedIn(values));
    } else {
      window.alert(JSON.stringify('Credenciales incorrectas, por favor intentelo nuevamente.', null, 4));
    }
  };

  submit = values => {
    const queryParams = { user: values.mail, password: values.password };
    api.get('/users', queryParams).then(response => this.alertLogIn(response, values));
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

export default connect(mapStateToProps)(RegisterFromContainer);
