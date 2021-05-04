import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="flex-col text-center">
      <h1 className="text-matrix-green font-mono font-extrabold text-xl mb-8">
        Log in or sign up
      </h1>
      <Link
        to="/login"
        className="bg-matrix-green-primary text-black font-mono font-bold text-lg rounded-sm mx-4 mt-8 p-2 hover:bg-matrix-green-hover"
      >
        Log In
      </Link>
      <Link
        to="/signup"
        className="bg-matrix-green-primary text-black font-mono font-bold text-lg rounded-sm mx-4 mt-8 p-2 hover:bg-matrix-green-hover"
      >
        Sign Up
      </Link>
    </div>
  );
}
