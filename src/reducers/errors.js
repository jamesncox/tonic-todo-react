import { SET_ERRORS, CLEAR_ERRORS } from "../actionTypes";

const errorsReducer = (
  state = {
    errors: null,
  },
  action
) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...state, errors: action.payload };

    case CLEAR_ERRORS:
      return { ...state, errors: null };

    default:
      return state;
  }
};

export default errorsReducer;
