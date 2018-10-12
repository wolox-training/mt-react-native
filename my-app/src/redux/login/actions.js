import api from '../../config/api';

export const actions = {
  LOG_IN: 'LOG_IN'
};

function setCredentialsInLocalStorage(response) {
  localStorage.setItem('Authorization', response.data.token);
}

export const makeALogInRequest = values => {
  return dispatch => {
    const queryParams = { user: values.mail, password: values.password };
    api.get('/users', queryParams).then(response => {
      console.log(JSON.stringify(response));
      if (response.ok && response.data.length > 0) {
        setCredentialsInLocalStorage(response);
        api.setHeaders({ ' Authorization': response.data.token });
        dispatch({
          type: actions.LOG_IN,
          payload: { user: values.mail, password: values.password, Authorization: response.data.token }
        });
      } else {
        window.alert(JSON.stringify('Credenciales incorrectas, por favor intentelo nuevamente.', null, 4));
      }
    });
  };
};
