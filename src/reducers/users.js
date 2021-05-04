import {
  SET_USER,
  USER_ERRORS,
  CLEAR_USER,
  CLEAR_ERRORS,
  LOADING_USER,
  CLEAR_IS_USER_LOADING,
} from "../actionTypes";

export default (
  state = {
    user: {},
    errors: [],
    loggedIn: false,
    loadingUser: false,
  },
  action
) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...state, loadingUser: true };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loadingUser: false,
      };

    case USER_ERRORS:
      return { ...state, errors: action.payload };

    case CLEAR_USER:
      return { ...state, user: {}, loggedIn: false, loadingUser: false };

    case CLEAR_ERRORS:
      return { ...state, errors: [] };

    case CLEAR_IS_USER_LOADING:
      return { ...state, loadingUser: false };

    default:
      return state;
  }
};
