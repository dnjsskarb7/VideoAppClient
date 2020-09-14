import { LOADING_SPINNER } from "../actions/types";
const initial_state = {
  loading: false,
};
export default (state = initial_state, action) => {
  console.log("from loading rcr", action);
  switch (action.type) {
    case LOADING_SPINNER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
