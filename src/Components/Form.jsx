import "./form.css";
  const Form = ({userdata,setUserData}) => {
  //event listener to capture onchange value
  const handlechange = (e) => {
    setUserData(e.target.value);
   }
  return (
    <form>
      <div className="taskinput">
        <label htmlFor="taskinput" >Todays Task:</label>
        <textarea
          type="text"
          id="taskinput"
          name="taskinput"
          value={userdata.task}
          placeholder="Enter Your Task Here..."
          onChange={handlechange}
        ></textarea>
      </div>
    </form>
  );
};
export default Form;
