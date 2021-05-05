import { SET_TOKEN } from "../actionTypes";

const sessionsReducer = (state = { token: "" }, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { token: action.payload };

    default:
      return state;
  }
};

export default sessionsReducer;
