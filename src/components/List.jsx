import React, { useState } from "react";
import data from "../data.json";
import Card from "./Card";

export default function List() {
  const [todos, setTodos] = useState(data);
  function removeHamdler(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container">
      {todos.map((todo) => {
        return <Card todo={todo} removeHamdler={removeHamdler} />;
      })}
    </div>
  );
}
