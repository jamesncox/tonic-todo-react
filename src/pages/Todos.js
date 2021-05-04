import { connect } from "react-redux";

function Todos(props) {
  return (
    <div className="-mt-96">
      <h1 className="text-matrix-green-primary text-5xl font-mono">
        Your Todos
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.username,
});

export default connect(mapStateToProps)(Todos);
