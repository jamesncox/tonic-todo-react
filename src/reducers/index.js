import { combineReducers } from "redux";
import sessions from "../reducers/sessions";
import users from "../reducers/users";
import errors from "../reducers/errors";
import todos from "../reducers/todos";

const rootReducer = combineReducers({
  sessions,
  users,
  errors,
  todos,
});

export default rootReducer;
