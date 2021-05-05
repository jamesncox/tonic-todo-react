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
          {props.todos ? props.todos.map((todo) => <li>{todo.text}</li>) : null}
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
