import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { loginUser } from "../actions/users";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    props.loginUser(user);
    setUsername("");
    setPassword("");
  };

  if (props.loggedIn) {
    return <Redirect to="/todos" />;
  } else {
    return (
      <div className="w-full sm:2/3 lg:w-1/2 xl:w-1/3 mt-16">
        <form
          className="container flex-1 flex flex-col px-2"
          onSubmit={handleLogin}
        >
          <div className="px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-matrix-green-primary text-center font-mono font-bold">
              Log In
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

            <label htmlFor="username">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </label>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-matrix-green-primary text-black hover:bg-matrix-green-hover focus:outline-none my-1 font-mono font-bold"
            >
              Enter The Matrix
            </button>
          </div>
          <div className="flex flex-col items-center mt-6">
            <p className="font-mono text-xl font-black text-matrix-green-secondary text-center">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="w-48 font-mono font-bold text-center rounded bg-matrix-green-secondary text-black focus:outline-none my-1 hover:bg-matrix-green-primary"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  errors: state.errors.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
