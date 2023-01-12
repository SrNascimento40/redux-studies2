//reducer
const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};

export default isLoggedReducer;