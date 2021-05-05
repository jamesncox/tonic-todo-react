import {
  SET_TODOS,
  LOADING_TODOS,
  CREATE_TODO,
  LOADING_SINGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CLEAR_LOADING_SINGLE_TODO,
} from "../actionTypes";

export default (
  state = {
    todos: [],
    loadingTodos: false,
    loadingSingleTodo: false,
  },
  action
) => {
  switch (action.type) {
    case LOADING_TODOS:
      return { ...state, todos: [...state.todos], loadingTodos: true };

    case SET_TODOS:
      return { ...state, todos: action.payload, loadingTodos: false };

    case LOADING_SINGLE_TODO:
      return { ...state, todos: [...state.todos], loadingSingleTodo: true };

    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loadingSingleTodo: false,
      };

    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
            done: action.payload.done,
          };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos, loadingTodos: false };

    case DELETE_TODO:
      const persistedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: persistedTodos, loadingTodos: false };

    case CLEAR_LOADING_SINGLE_TODO:
      return { ...state, loadingSingleTodo: false };

    default:
      return state;
  }
};
