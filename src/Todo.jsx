import "./Todo.css";
import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
    console.log(e.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      setTask((task) => [...task, newTask]);
      setNewTask("");
      alert("this is my notification")
    }
  }

  function delTask(index) {
    const upd = task.filter((_, i) => i !== index);
    setTask(upd);
  }

  function upTask(index) {
    if (index > 0) {
      const updArray = [...task];
      [updArray[index], updArray[index - 1]] = [
        updArray[index - 1],
        updArray[index],
      ];
      setTask(updArray);
    }
  }

  function downTask(index) {
    if (index < task.length - 1) {
      const updArray = [...task];
      [updArray[index], updArray[index + 1]] = [
        updArray[index + 1],
        updArray[index],
      ];
      setTask(updArray);
    }
  }

  return (
    <>
      <h1 className="title">TO-DO LIST</h1>
      <div className="todo-container">
        <div className="input-group">
          <input
            type="text"
            className="task-input"
            onChange={handleInput}
            placeholder="Enter a task"
            value={newTask}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol className="task-list">
          {task.map((t, index) => (
            <li className="task-item" key={index}>
              <span className="task-text">{t}</span>
              <button
                className="task-btn delButton"
                onClick={() => delTask(index)}
              >
                Del
              </button>
              <button
                className="task-btn upButton"
                onClick={() => upTask(index)}
              >
                Up
              </button>
              <button
                className="task-btn downButton"
                onClick={() => downTask(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Todo;
