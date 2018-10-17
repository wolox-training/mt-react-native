import api from '../config/api';

function getAuthenticatedLogIn({ mail, password }) {
  const queryParams = { user: mail, password };
  return api.get('/users', queryParams).then(response => {
    if (response.ok && response.data.length > 0) {
      api.setHeaders({ Authorization: response.data[0].token });
    }
    return response;
  });
}

const LogInService = {
  getAuthenticatedLogIn
};

export default LogInService;
