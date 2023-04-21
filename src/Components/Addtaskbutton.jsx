const Addtaskbutton = ({userdata,setUserData}) => {
        //to handle click of add task. 
        const handleclick=()=>{
          //store existing and previous data in an array of object
          setUserData(userdata);
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