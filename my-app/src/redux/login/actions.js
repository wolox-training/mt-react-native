export const actions = {
  LOG_IN: 'LOG_IN'
};

export function MakeALogInRequest(values) {
  return {
    type: actions.LOG_IN,
    payload: { user: values.mail, password: values.password }
  };
}
