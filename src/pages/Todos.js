import { connect } from "react-redux";
import { Redirect } from "react-router";
import AddTodo from "../components/AddTodo";

function Todos(props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <AddTodo />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.username,
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(Todos);
