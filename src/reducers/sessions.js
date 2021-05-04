import { SET_TOKEN } from "../actionTypes";

export default (state = { token: "" }, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { token: action.payload };

    default:
      return state;
  }
};
