import { SET_TOKEN } from "../actionTypes";

const setToken = (token) => {
  return (dispatch) => {
    dispatch({ type: SET_TOKEN, payload: token });
  };
};

export const getToken = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://the-matrix-todo.herokuapp.com/api/v1/auth_check"
      );

      if (!res.ok) {
        throw res;
      }

      const tokenData = await res.json();
      dispatch(setToken(tokenData.csrf_auth_token));
    } catch (err) {
      console.log(err);
    }
  };
};
