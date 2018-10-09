import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <label> E-Mail </label>
          <Field name="mail" component="input" type="text" />
        </div>
        <div>
          <label> password</label>
          <Field name="password" component="input" type="password" />
        </div>
      </form>
    );
  }
}

Login = reduxForm({ form: 'login' })(Login);

export default Login;
