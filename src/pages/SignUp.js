import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { signupUser } from "../actions/users";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      password_confirmation: passwordConfirmation,
    };
    props.signupUser(props.token, user);
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
  };

  if (props.loggedIn) {
    return <Redirect to="/todos" />;
  } else {
    return (
      <div className="w-full sm:2/3 lg:w-1/2 xl:w-1/3 min-h-screen mt-16">
        <form
          className="container flex-1 flex flex-col px-2"
          onSubmit={handleSignup}
        >
          <div className="px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-matrix-green-primary text-center font-mono font-bold">
              Sign up
            </h1>
            {props.errors
              ? props.errors.map((error, index) => {
                  return (
                    <ul key={index}>
                      <li
                        className="text-red-500 text-center my-5 text-xl"
                        key={index}
                      >
                        {error}
                      </li>
                    </ul>
                  );
                })
              : null}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmation}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-matrix-green-primary text-black hover:bg-matrix-green-hover focus:outline-none my-1 font-mono font-bold"
            >
              Create Account
            </button>
          </div>

          <div className="flex flex-col items-center text-grey-dark mt-6 font-mono font-extrabold text-matrix-green-secondary text-center">
            <p className="font-mono text-xl font-black text-matrix-green-secondary text-center">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="w-48 font-mono font-bold text-center rounded bg-matrix-green-secondary text-black focus:outline-none my-1 hover:bg-matrix-green-primary"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.user.loggedIn,
  token: state.sessions.token,
  loadingUser: state.user.loadingUser,
  errors: state.errors.errors,
});

export default connect(mapStateToProps, { signupUser })(SignUp);
