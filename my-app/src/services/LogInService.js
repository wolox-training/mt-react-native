import api from '../config/api';

// function getAuthenticatedLogIn({ mail, password }) {
//   const queryParams = { user: mail, password };
//   return api.get('/users', queryParams).then(response => response);
// }

function getAuthenticatedLogIn({ mail, password }) {
  const queryParams = { user: mail, password };
  return api.get('/users', queryParams);
}

const LogInService = {
  getAuthenticatedLogIn
};

export default LogInService;
