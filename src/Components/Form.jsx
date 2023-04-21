import "./form.css";
const Form = ({ userdata, setUserData }) => {
  //event listener to capture onchange value
  const handlechange = (e) => {
   // console.log(setUserData);
    setUserData(e.target.value);
  };
  // console.log(userdata);
  return (
    <form>
      <div className="taskinput">
        <label htmlFor="taskinput"></label>
        <textarea
          type="text"
          id="taskinput"
          name="taskinput"
          value={userdata}
          placeholder="Enter Your Task Here..."
          onChange={handlechange}
        ></textarea>
      </div>
      <p>{userdata}</p>
    </form>
  );
};
export default Form;
