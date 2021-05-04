import { connect } from "react-redux";
import { Redirect } from "react-router";

function Todos(props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="pt-8">
        <h1 className="text-matrix-green-primary text-3xl md:text-5xl font-mono">
          Your Todos
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.username,
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(Todos);
