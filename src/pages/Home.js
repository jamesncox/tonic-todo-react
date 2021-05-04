export default function Home(props) {
  return (
    <div className="flex-col text-center">
      <h1 className="text-matrix-green font-mono text-xl">Log in or sign up</h1>
      <button className="bg-matrix-green text-black font-mono font-bold text-lg rounded-sm mx-4 mt-8 p-2">
        Log In
      </button>
      <button className="bg-matrix-green text-black font-mono font-bold text-lg rounded-sm mx-4 mt-8 p-2">
        Sign Up
      </button>
    </div>
  );
}
