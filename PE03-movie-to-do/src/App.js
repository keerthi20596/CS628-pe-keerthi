import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <div>
          <button onClick={addTask} className="add-task">
            Add Task
          </button>
        </div>
      </div>
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
