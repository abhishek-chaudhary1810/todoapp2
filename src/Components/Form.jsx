import "./form.css";
function Form(){
  return (
    <form>
      <div className="taskinput">
        <label htmlFor="taskinput"></label>
        <textarea
          type="text"
          id="taskinput"
          placeholder="Enter Your Task Here..."
        ></textarea>
      </div>
      <div style={{ textAlign : 'center' ,fontFamily:"monospace"}}>
        <button type="button" id="addtask">
          Add Task
        </button>
        <label htmlFor="addtask"> </label>
      </div>
    </form>
  );
}

export default Form;
