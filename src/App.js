import {useState} from 'react';
import Form from './Components/Form';
import Header  from './Components/Header';
import Addtaskbutton from './Components/Addtaskbutton';
import Taskitem from './Components/Taskitem';
const Todo = () => {
  const [userdata,setUserData]=useState([{
    id: 0,
    task: ""
  }]);
  //console.log(userdata);
  return(
   <div>
    <Header/>
    <Form userdata={userdata} setUserData={setUserData}/>
    <Addtaskbutton userdata={userdata} setUserData={setUserData}/>
    <Taskitem userdata={userdata}/> 
   </div>
   );
}
export default Todo;