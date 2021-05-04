import { combineReducers } from "redux";
import sessions from "../reducers/sessions";
import user from "../reducers/user";
import errors from "../reducers/errors";
import todos from "../reducers/todos";

const rootReducer = combineReducers({
  sessions,
  user,
  errors,
  todos,
});

export default rootReducer;
