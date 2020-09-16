import { FETCH_AUTH, LOGOUT_AUTH } from "../actions/types";

const INITIAL_STATE = {
  google_oauth: null,
  login_token: null,
};

export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_AUTH:
      return action.payload || false;
    case LOGOUT_AUTH:
      return false;
    // case SIGNUP_CREATE:
    // return action.payload;
    default:
      return state;
  }
};
