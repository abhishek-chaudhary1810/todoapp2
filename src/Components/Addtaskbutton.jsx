const Addtaskbutton = () => {
  //to handle click of add task. 
  const handleclick=()=>{
    //what will happen on handle click
 } 
 return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <button type="button" id="addtask" onClick={handleclick}>
        Add Task
      </button>
      <label htmlFor="addtask"> </label>
    </div>
  );
};

export default Addtaskbutton;