import api from '../../config/api';

export const actions = {
  LOG_IN: 'LOG_IN'
};

export const makeALogInRequest = values => {
  return dispatch => {
    const queryParams = { user: values.mail, password: values.password };
    api.get('/users', queryParams).then(response => {
      if (response.ok && response.data.length > 0) {
        dispatch({
          type: actions.LOG_IN,
          payload: { user: values.mail, password: values.password }
        });
      } else {
        window.alert(JSON.stringify('Credenciales incorrectas, por favor intentelo nuevamente.', null, 4));
      }
    });
  };
};
