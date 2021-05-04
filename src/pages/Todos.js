import { connect } from "react-redux";

function Todos(props) {
  return (
    <h1 className="text-matrix-green-primary text-5xl font-mono">
      {props.user} List
    </h1>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.username,
});

export default connect(mapStateToProps)(Todos);
