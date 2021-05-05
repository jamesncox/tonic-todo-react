import { useState } from "react";
import { connect } from "react-redux";

function AddTodo(props) {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      text: todo,
      done: false,
    };
  };

  return (
    <div className="mt-16">
      <form className="w-full px-2" onSubmit={handleAddTodo}>
        <label className="text-xl text-matrix-green-primary" htmlFor="add todo">
          Add New Todo
        </label>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-5 mt-5"
          name="todo"
          placeholder="New Todo"
          value={todo}
          onChange={handleTodoChange}
        />

        <button
          type="submit"
          className="w-full text-center rounded bg-matrix-green-primary text-black hover:bg-matrix-green-hover focus:outline-none my-1 font-mono font-bold"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
