import { connect } from "react-redux";
import { clearCurrentUser, clearErrors } from "../actions/users";

function Header({ username, clearCurrentUser, clearErrors }) {
  const displayUser = () => {
    if (username) {
      return username;
    } else {
      return "Tonic";
    }
  };

  const clearUserAndErrors = () => {
    clearCurrentUser();
    clearErrors();
  };

  return (
    <div className="pt-8 pl-5">
      <header className="text-matrix-green-primary text-2xl md:text-4xl font-bold font-mono">
        Wake up, {displayUser()}...
      </header>
      {username ? (
        <button
          className="bg-matrix-green-primary text-black font-mono font-bold rounded-sm mt-8 p-2 hover:bg-matrix-green-hover"
          onClick={clearUserAndErrors}
        >
          Log Out
        </button>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps, { clearCurrentUser, clearErrors })(
  Header
);
