import React, { useState } from "react";

function ToDoList() {
  const [task, setTasks] = useState([]);
  const [newT, setNewT] = useState("");
  const [completed, setCompleted] = useState([]); 
  function handleInputCng(event) {
    setNewT(event.target.value);
  }

  function addTask() {
    if (newT.trim() === "") return;
    setTasks([...task, newT]);
    setNewT("");
  }

  function delTask(index) {
    const updated = task.filter((_, i) => i !== index);
    setTasks(updated);
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const updated = [...task];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setTasks(updated);
  }

  function moveTaskdown(index) {
    if (index === task.length - 1) return;
    const updated = [...task];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setTasks(updated);
  }

  function completeTask(index) {
    const completedTask = task[index];
    const updated = task.filter((_, i) => i !== index);
    setTasks(updated);
    setCompleted([...completed, completedTask]);
  }
  return (
    <>
      <div className="to-do">
        <h2>To Do list</h2>
        <div>
          <input
            type="text"
            placeholder="Enter the task to add"
            value={newT}
            onChange={handleInputCng}
          />
          <button className="addbtn" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((t, index) => (
            <li key={index}>
              <span className="text">{t}</span>
              <button className="Del-btn" onClick={() => delTask(index)}>
                Delete
              </button>
              <button className="Up-btn" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button className="Down-btn" onClick={() => moveTaskdown(index)}>
                Down
              </button>
              <button
                className="Complete-btn"
                onClick={() => completeTask(index)}
              >
                Complete
              </button>
            </li>
          ))}
        </ol>

        {completed.length > 0 && (
          <div className="completed-section">
            <h3>✅ Completed Tasks</h3>
            <ul>
              {completed.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default ToDoList;
