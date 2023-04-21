import { useState } from 'react';
import Form from './Components/Form';
import Header  from './Components/Header';
import Addtaskbutton from './Components/Addtaskbutton';
const Todo=()=>{
  const [userdata,setUserData]=useState('');
  return(
   <div>
    <Header/>
    <Form userdata={userdata} setUserData={setUserData}/>
    <Addtaskbutton />
   </div>
   );
}
export default Todo;