import React, { Component } from 'react';
import { create } from 'apisauce';

import LogIn from './layout';

class RegisterFromContainer extends Component {
  getInitialValues = () => {
    return {
      mail: '',
      password: ''
    };
  };

  alertLogIn = res => {
    if (res.data.length > 0) {
      window.alert(JSON.stringify('Log in correcto', null, 4));
    } else {
      window.alert(JSON.stringify('Credenciales incorrectas, por favor intentelo nuevamente.', null, 4));
    }
  };

  submit = values => {
    const api = create({
      baseURL: 'http://localhost:3004',
      headers: { Accept: 'application/vnd.github.v3+json' }
    });

    const endpoint = '/users?user=' + values.mail + '&password=' + values.password;

    api.get(endpoint).then(response => this.alertLogIn(response));
  };

  render() {
    return <LogIn onSubmit={this.submit} initialValues={this.getInitialValues()} />;
  }
}

export default RegisterFromContainer;