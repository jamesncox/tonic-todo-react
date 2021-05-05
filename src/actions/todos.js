import {
  SET_TODOS,
  CREATE_TODO,
  SET_ERRORS,
  UPDATE_TODO,
  DELETE_TODO,
  CLEAR_ERRORS,
} from "../actionTypes";

const setTodos = (todos) => {
  return { type: SET_TODOS, payload: todos };
};

export const getTodos = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://the-matrix-todo.herokuapp.com/api/v1/user_todos/${id}`
    );

    const todoData = await res.json();

    if (todoData.errors) {
      dispatch({ type: SET_ERRORS, payload: todoData.errors });
    } else {
      dispatch(setTodos(todoData));
    }
  };
};

export const createTodo = (todo) => {
  return async (dispatch) => {
    const formData = {
      text: todo.text,
      done: todo.done,
      user_id: todo.userId,
    };

    const res = await fetch(
      "https://the-matrix-todo.herokuapp.com/api/v1/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      }
    );

    const todoObj = await res.json();

    if (todoObj.errors) {
      dispatch({ type: SET_ERRORS, payload: todoObj.errors });
    } else {
      dispatch({ type: CREATE_TODO, payload: todoObj });
      dispatch({ type: CLEAR_ERRORS });
    }
  };
};

export const changeTodoStatus = (todo) => {
  return async (dispatch) => {
    const formData = {
      text: todo.text,
      done: todo.done,
      user_id: todo.userId,
    };

    const res = await fetch(
      `https://the-matrix-todo.herokuapp.com/api/v1/todos/${todo.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      }
    );

    const todoObj = await res.json();

    if (todoObj.errors) {
      dispatch({ type: SET_ERRORS, payload: todoObj.errors });
    } else {
      dispatch({ type: UPDATE_TODO, payload: todoObj });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://the-matrix-todo.herokuapp.com/api/v1/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    const todoObj = await res.json();

    dispatch({ type: DELETE_TODO, payload: todoObj });
  };
};
