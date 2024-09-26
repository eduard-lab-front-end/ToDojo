import { Button, ListGroup } from "react-bootstrap";

export default function Card({ todo, removeHandler, toggleCompletion }) {
  return (
    <ListGroup>
      <ListGroup.Item
        as="li"
        className="bg-transparent d-flex justify-content-between align-items-center text-white mb-4"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Title: {todo.title}</div>
          Date: {todo.created || '20.04.2024'}
        </div>
        <input
          type="checkbox"
          className="btn-check"
          id={todo.id}
          checked={todo.completed ? true : false}
          onChange={() => toggleCompletion(todo.id)}
        />
        <label className="btn bsb-btn-xl btn-outline-light rounded-pill m-1" htmlFor={todo.id}>
          <i className="bi bi-check2"></i>
        </label>

        <Button className='btn btn-outline-light bg-transparent' type="button" onClick={() => removeHandler(todo.id)}>
          <i className="bi bi-trash"></i>
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
