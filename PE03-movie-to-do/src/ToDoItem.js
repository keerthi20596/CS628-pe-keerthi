import React from "react";

function ToDoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      <span>{task}</span>
      <button onClick={onDelete} className="delete-task">
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
