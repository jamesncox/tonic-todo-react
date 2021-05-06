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

  if (!loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="w-full sm:2/3 lg:w-1/2 xl:w-1/3 min-h-screen mt-16">
        <AddTodo />
        <ul>
          {todos
            ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
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
