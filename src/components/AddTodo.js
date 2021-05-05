import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions/todos";

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
      userId: props.id,
    };

    props.createTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="mt-16">
      <form className="mx-5 md:mx-0 px-2" onSubmit={handleAddTodo}>
        <label className="text-xl text-matrix-green-primary" htmlFor="add todo">
          Add New Todo
        </label>
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

const mapStateToProps = (state) => ({
  id: state.user.id,
  errors: state.errors.errors,
});

export default connect(mapStateToProps, { createTodo })(AddTodo);
