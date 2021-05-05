export default function TodoItem({ todo }) {
  return (
    <div
      className="flex justify-between items-center mx-5 md:mx-0 mt-5 bg-matrix-green p-4 rounded"
      key={todo.id}
    >
      <div className="flex items-center">
        <input
          className="mr-5 checked:bg-matrix-green-secondary checked:border-transparent "
          type="checkbox"
          id={todo.id}
          name={todo}
          value={todo}
        />
        <li className="text-matrix-green-secondary font-mono font-bold text-lg md:text-xl">
          {todo.text}
        </li>
      </div>
      <button>
        <div className="ml-5 bg-matrix-green-secondary px-2 rounded font-bold text-matrix-green-light hover:bg-matrix-green-light hover:text-matrix-green-primary">
          x
        </div>
      </button>
    </div>
  );
}
