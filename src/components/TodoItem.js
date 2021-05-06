import { deleteTodo, changeTodoStatus } from "../actions/todos";
import { connect } from "react-redux";

function TodoItem({ todo, deleteTodo, changeTodoStatus }) {
  const updateCheckedStatus = (e) => {
    const todoObj = {
      ...todo,
      done: e.target.checked,
    };

    changeTodoStatus(todoObj);
  };

  return (
    <div className="flex justify-between items-center mx-5 md:mx-0 mt-5 bg-matrix-green p-4 rounded">
      <div className="flex items-center">
        <input
          className="mr-5 checked:bg-matrix-green-secondary checked:border-transparent "
          type="checkbox"
          id={todo.id}
          name={todo}
          value={todo}
          onClick={updateCheckedStatus}
          defaultChecked={todo.done}
        />
        <li
          className={`text-matrix-green-text font-mono font-bold text-lg md:text-xl ${
            todo.done ? "line-through" : ""
          }`}
        >
          {todo.text}
        </li>
      </div>
      <button
        className="leading-none ml-5 bg-matrix-green-text px-2 py-1 rounded font-bold text-matrix-green-light hover:bg-matrix-green-light hover:text-matrix-green-primary"
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
}

export default connect(null, { deleteTodo, changeTodoStatus })(TodoItem);
