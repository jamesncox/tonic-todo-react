import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import AddTodo from "../components/AddTodo";
import { getTodos } from "../actions/todos";

function Todos(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.loggedIn) {
      dispatch(getTodos(props.id));
    }
  }, [dispatch, props.id, props.loggedIn]);

  if (!props.loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <AddTodo />
        <ul>
          {props.todos
            ? props.todos.map((todo) => (
                <div
                  className="flex mx-5 md:mx-0 mt-16 bg-matrix-green p-4 rounded"
                  key={todo.id}
                >
                  <input
                    className="mt-1.5 mr-5 checked:bg-matrix-green-secondary checked:border-transparent "
                    type="checkbox"
                    id={todo.id}
                    name={todo}
                    value={todo}
                  />
                  <li className="text-matrix-green-secondary font-mono font-bold text-lg md:text-xl">
                    {todo.text}
                  </li>
                  <button className="ml-5 bg-matrix-green-secondary px-2 rounded font-bold font-mono text-matrix-green-light hover:bg-matrix-green-light hover:text-matrix-green-primary">
                    X
                  </button>
                </div>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.username,
  id: state.user.id,
  loggedIn: state.user.loggedIn,
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { getTodos })(Todos);
