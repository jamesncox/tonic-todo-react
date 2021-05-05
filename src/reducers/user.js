import {
  SET_USER,
  CLEAR_USER,
  CLEAR_ERRORS,
  LOADING_USER,
  CLEAR_IS_USER_LOADING,
} from "../actionTypes";

const userReducer = (
  state = {
    username: "",
    id: null,
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

export default userReducer;
