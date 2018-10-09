import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from './Components/Fields/index';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="mail" component={customInput} type="text" label="E-Mail" />
        <Field name="password" component={customInput} type="password" label="Password" />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

Login = reduxForm({ form: 'login' })(Login);

export default Login;
