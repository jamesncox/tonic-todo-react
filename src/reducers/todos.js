import {
  SET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../actionTypes";

const todosReducer = (
  state = {
    todos: [],
    loadingTodos: false,
    loadingSingleTodo: false,
  },
  action
) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload, loadingTodos: false };

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

    default:
      return state;
  }
};

export default todosReducer;
