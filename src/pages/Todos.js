import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import AddTodo from "../components/AddTodo";
import { getTodos } from "../actions/todos";
import TodoItem from "../components/TodoItem";

function Todos({ id, loggedIn, todos }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(getTodos(id));
    }
  }, [dispatch, id, loggedIn]);

  const incompleteTodos = todos.filter((todo) => todo.done === false);
  const completeTodos = todos.filter((todo) => todo.done === true);

  if (!loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="w-full sm:2/3 lg:w-1/2 mt-16">
        <AddTodo />
        {incompleteTodos.length > 0 ? (
          <p className="text-matrix-green font-mono font-bold text-lg mx-5 md:mx-0">
            Incomplete
          </p>
        ) : null}
        <ul>
          {incompleteTodos
            ? incompleteTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            : null}
        </ul>
        {completeTodos.length > 0 ? (
          <p className="text-matrix-green font-mono font-bold text-lg mx-5 md:mx-0">
            Complete
          </p>
        ) : null}
        <ul>
          {completeTodos
            ? completeTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            : null}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id,
  loggedIn: state.user.loggedIn,
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { getTodos })(Todos);
