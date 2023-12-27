
import React, { useState } from 'react'

const Content = () => {
const [task ,setTask] = useState('');
const[description ,setDescription] = useState('');
const [tasks ,setTasks] = useState([]);
const addTask = (event) =>{
event.preventDefault();
setTasks([...tasks,{task,description}]);
setTask('');
setDescription('');
}

const deleteTask =(index) =>{
  const filterArry = tasks.filter((val,i)=>{
    return i!==index;
  
  })
  setTasks(filterArry);

}

  return (
    <>
    <div className='content-main'>
      
     
       <form onSubmit={addTask}>
        <input type='text' 
        value={task}
        onChange={e =>setTask(e.target.value)}
               placeholder='Title' 
               autoComplete='off'/>
        <textarea 
               rows= '' 
               column = '' 
               value={description}
        onChange={e =>setDescription(e.target.value)}
               placeholder='Write a note...'/>
        <button type='submit' className='btn-content'>+</button>
       </form>
        </div>
      
        
        {tasks.map((item,index) =>(
            <div className='note'>
         <h1 key={index}>{item.task}</h1>
       
        <p key={index}>{item.description}</p>
     
     <button onClick={() =>deleteTask(index)} className='btn-con'><i className="fa fa-trash-o" aria-hidden="true"></i></button>
     <button className='btn-con btn-edit'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>

    </div>
        ))} 
       
    </>
    
  )
}

export default Content