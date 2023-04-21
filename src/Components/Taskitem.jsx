const Taskitem = ({userdata}) => {
  //console.log(userdata);
  if(userdata===''){   
  return( 
     <div>
      <div >
        <h3>{userdata}</h3>
      </div>
    </div>
     )}
     else{
      return(
        <div>
         <div style={{textAlign: "center", fontFamily: "monospace" }}>
          <h3>Please add a task...</h3>
          </div>
        </div>
      );
     }
};
export default Taskitem;
