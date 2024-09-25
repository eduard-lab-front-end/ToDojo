import React, { useState } from "react";

import Card from "./Card";
import { ListGroupItem } from "react-bootstrap";

export default function List({ todos, removeHandler, toggleCompletion }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Card
            key={todo.id}
            todo={todo}
            removeHandler={removeHandler}
            toggleCompletion={toggleCompletion}
          />
        );
      })}
    </>
  );
}
