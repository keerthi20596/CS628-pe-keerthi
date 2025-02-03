import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} onDelete={() => deleteTask(index)} />
      ))}
    </ul>
  );
}

export default ToDoList;
