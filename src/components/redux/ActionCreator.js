export const login = (email, password) => {
  return {
    type: "LOGIN_PAGE",
    payload: {
      email: email,
      password: password,
    },
  };
};
