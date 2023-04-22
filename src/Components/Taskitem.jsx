const Taskitem = ({ userdata }) => {
  const tasks = userdata.map((item) => {
    return <h3 key={item.id}>{item.task || ""}</h3>;
  });
  if (!userdata?.length)
    return (
      <div>
        <div style={{ textAlign: "center", fontFamily: "monospace" }}>
          <h3>Please add a task...</h3>
        </div>
      </div>
    );
  else {
    return (
      <div>
        <div style={{ textAlign: "center", fontFamily: "monospace" }}>
          {tasks}
        </div>
      </div>
    );
  }
};
export default Taskitem;
