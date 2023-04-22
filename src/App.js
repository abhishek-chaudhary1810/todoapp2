import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Taskitem from "./Components/Taskitem";
const Todo = () => {
  const [userdata, setUserData] = useState([
    {
      id: 0,
      task: "a",
    },
  ]);
  const addNewTask = (task) => {
    setUserData((prev) => {
      const updatedTasks = [...prev];
      updatedTasks.push(task);
      return updatedTasks;
    });
  };
  return (
    <div>
      <Header />
      <Form addNewTask={addNewTask} />
      <Taskitem userdata={userdata} />
    </div>
  );
};
export default Todo;
