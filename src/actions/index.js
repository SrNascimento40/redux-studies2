//Action
const increment = (nr = 1) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

const decrement = (nr = 1) => {
  return {
    type: "DECREMENT",
    payload: nr,
  };
};

const sign_in = () => {
  return {
    type: "SIGN_IN",
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export { increment, decrement, sign_in, logout };
