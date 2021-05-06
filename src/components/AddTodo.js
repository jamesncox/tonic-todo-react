import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions/todos";

function AddTodo({ id, errors, createTodo }) {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      text: todo,
      done: false,
      userId: id,
    };

    createTodo(newTodo);
    setTodo("");
  };

  return (
    <>
      <form className="mx-5" onSubmit={handleAddTodo}>
        <label
          className="text-2xl font-extrabold text-matrix-green-primary font-mono"
          htmlFor="add todo"
        >
          Add New Todo
        </label>
        {errors
          ? errors.map((error, index) => {
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
          className="block border border-grey-light w-full p-3 rounded mb-2 mt-5"
          name="todo"
          placeholder="New Todo"
          value={todo}
          onChange={handleTodoChange}
        />

        <button
          type="submit"
          className="w-full text-center rounded bg-matrix-green-primary text-lg text-black hover:bg-matrix-green-hover focus:outline-none mb-10 font-mono font-bold"
        >
          Add
        </button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  id: state.user.id,
  errors: state.errors.errors,
});

export default connect(mapStateToProps, { createTodo })(AddTodo);
