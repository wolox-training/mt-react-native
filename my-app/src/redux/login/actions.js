import LogInService from '../../services/LogInService';
import { setCredentialsInLocalStorage } from '../../app/utils/utils';

export const actions = {
  LOG_IN: '@@LOG_IN/LOG_IN'
};

const actionCreators = {
  makeALogInRequest: values => {
    return async dispatch => {
      const response = await LogInService.getAuthenticatedLogIn(values);
      if (response.ok && response.data.length > 0) {
        setCredentialsInLocalStorage(response.data[0].token);
        dispatch({
          type: actions.LOG_IN,
          payload: { authorization: response.data[0].token }
        });
      } else {
        window.alert('Credenciales incorrectas, por favor intentelo nuevamente.');
      }
    };
  }
};

export default actionCreators;
