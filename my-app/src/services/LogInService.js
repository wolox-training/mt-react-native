import api from '../config/api';

function getAuthenticatedLogIn({ mail, password }) {
  const queryParams = { user: mail, password };
  return api.get('/users', queryParams).then(response => response);
}

const LogInService = {
  getAuthenticatedLogIn
};

export default LogInService;
