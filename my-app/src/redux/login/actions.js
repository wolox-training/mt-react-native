import getAuthenticatedLogIn from '../../services/LogInService';

export const actions = {
  LOG_IN: '@@LOG_IN/LOG_IN'
};

export const makeALogInRequest = values => {
  return dispatch => {
    getAuthenticatedLogIn(values, dispatch);
  };
};
