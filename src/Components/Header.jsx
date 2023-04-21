const Header=() =>{
  // const getDate=()=>{
  //     return todaysdate;
  // }
  // console.log(todaysdate);
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        <p>My Day</p>
      </div>
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        <p>
          {new Date().toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default Header;
