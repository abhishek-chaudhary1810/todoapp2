import { useState } from "react";
import "./form.css";
const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmitTask = (e) => {
    e.preventDefault();
    addNewTask({ task: newTask, id: Date.now() });
    setNewTask("");
  };

  return (
    <form onSubmit={addNewTask}>
      <div className="taskinput">
        <label htmlFor="taskinput">Todays Task:</label>
        <input
          type="text"
          id="taskinput"
          name="taskinput"
          value={newTask}
          placeholder="Enter Your Task Here..."
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div style={{ textAlign: "center", fontFamily: "monospace" }}>
        <button type="submit" id="addtask" onClick={handleSubmitTask}>
          Add Task
        </button>
        <label htmlFor="addtask"> </label>
      </div>
    </form>
  );
};
export default Form;
