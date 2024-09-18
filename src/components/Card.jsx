import "../global.css";

export default function Card({ todo, removeHamdler }) {
  return (
    <>
      {!todo.completed && (
        <div className="card">
          <p>{todo.title}</p> <input type="checkbox" />
          <button type="button" onClick={() => removeHamdler(todo.id)}>
            x
          </button>
        </div>
      )}
    </>
  );
}
