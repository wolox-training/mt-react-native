import api from '../config/api';
import { actions } from '../redux/login/actions';

function setCredentialsInLocalStorage(response) {
  localStorage.setItem('authorization', response.data.token);
}

function getAuthenticatedLogIn(values, dispatch) {
  const queryParams = { user: values.mail, password: values.password };
  api.get('/users', queryParams).then(response => {
    if (response.ok && response.data.length > 0) {
      setCredentialsInLocalStorage(response);
      api.setHeaders({ Authorization: response.data[0].token });
      dispatch({
        type: actions.LOG_IN,
        payload: { authorization: response.data[0].token }
      });
    } else {
      window.alert('Credenciales incorrectas, por favor intentelo nuevamente.');
    }
  });
}

export default getAuthenticatedLogIn;
