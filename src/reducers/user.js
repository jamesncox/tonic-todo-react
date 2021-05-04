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
    username: "",
    id: null,
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
        ...action.payload,
        loggedIn: true,
        loadingUser: false,
      };

    case USER_ERRORS:
      return { ...state, errors: action.payload };

    case CLEAR_USER:
      return {
        ...state,
        username: "",
        id: null,
        loggedIn: false,
        loadingUser: false,
      };

    case CLEAR_ERRORS:
      return { ...state, errors: [] };

    case CLEAR_IS_USER_LOADING:
      return { ...state, loadingUser: false };

    default:
      return state;
  }
};
