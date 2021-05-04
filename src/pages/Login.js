import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <div className="w-full sm:2/3 lg:w-1/2 xl:w-1/3 min-h-screen flex flex-col">
      <div className="container flex-1 flex flex-col items-center justify-center px-2">
        <div className="px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-matrix-green-primary text-center font-mono font-bold">
            Log In
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

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
      </div>
    </div>
  );
}
