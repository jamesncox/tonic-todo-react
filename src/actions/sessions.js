import { SET_TOKEN } from "../actionTypes";

const BASE_URL = "https://the-matrix-todo.herokuapp.com/api/v1";

export const getToken = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/auth_check`);

      if (!res.ok) {
        throw res;
      }

      const tokenData = await res.json();
      dispatch({ type: SET_TOKEN, payload: tokenData.csrf_auth_token });
    } catch (err) {
      console.log(err);
    }
  };
};
