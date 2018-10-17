import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { MAIL_FIELD_NAME, PASSWORD_FIELD_NAME } from '../../utils/consts';
import { customInput } from './Components/Fields/index';
import { required, wrongMail, minLength } from './validation/index';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name={MAIL_FIELD_NAME}
          component={customInput}
          type="text"
          label="E-Mail"
          validate={[required, wrongMail]}
        />
        <Field
          name={PASSWORD_FIELD_NAME}
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

Login = reduxForm({ form: 'login' })(Login);

export default Login;
