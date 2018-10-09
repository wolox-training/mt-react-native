function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const required = value => (value ? undefined : ' is required');

export const wrongMail = value => (validateEmail(value) ? undefined : ' is invalid');
