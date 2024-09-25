import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "../components/List";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [formInputValue, setFormInputsValue] = useState({
    title: "",
    id: uuidv4(),
    completed: false,
    created: new Date().toLocaleDateString(),
  });

  async function getTodosData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (!res.ok) {
      throw new Error("404 - Wrong request");
    }
    const result = await res.json();
    const splitTodos = result.splice(0, 10);
    setTodos(splitTodos);
  }
  useEffect(() => {
    getTodosData();
  }, []);

  function onChange(event) {
    const currentTarget = event.target.name;
    let currentValue = event.target.value;
    if (event.target.type === "checkbox") {
      currentValue = event.target.checked;
    }
    setFormInputsValue({ ...formInputValue, [currentTarget]: currentValue });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    const newTodo = {
      ...formInputValue,
      id: uuidv4(),
      created: new Date().toLocaleDateString(),
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setFormInputsValue({
      title: "",
      completed: false,
    });
  }
  function removeHandler(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  function toggleCompletion(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <div>
      <div className="list-header mb-3">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
          alt="Check"
          width="70"
        />
        <h2>Task List</h2>
      </div>
      <form onSubmit={onSubmitHandler}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="My next task..."
            required
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={formInputValue.title}
            onChange={onChange}
            name="title"
            className="bg-transparent text-white"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            className="btn btn-outline-light"
          >
            Add
          </Button>
        </InputGroup>
      </form>
      <List
        todos={todos}
        removeHandler={removeHandler}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}
