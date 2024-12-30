import React, { useEffect, useRef, useState } from "react";
// import "../App.css";
import { MdTaskAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function TodoList() {
  
 const [task,setTask]=useState('')
 const [tasks,setTasks]=useState([])
 const [editId,setEditId]=useState(0)
const inputRef=useRef()
useEffect(()=>{
  inputRef.current.focus();
})
 const handleSubmit=(e)=>{
  e.preventDefault()
 }
 const addTask=()=>{
if(task!==''){
  setTasks([...tasks,{list:task,id:Date.now(),completed:false}])
  setTask('')
}
if(editId){
  const findTask=tasks.find((todo)=>todo.id===editId)
  const updateTask=tasks.map((to)=>to.id===findTask.id?
 (to={id:to.id,list:task}):
(to={id:to.id,list:to.list}))
setTasks(updateTask)
setEditId(0)
}
  }
  const onDelete=(id)=>{
   setTasks( tasks.filter((list)=>list.id!==id))
  }
  const handlecomplete=(id)=>{
    let complete=tasks.map((list)=>{
      if(list.id===id){
      return {...list,completed:!list.completed}
      }
      return list
    })
    
    setTasks(complete)
  }
  const handleEdit=(id)=>{
   let editeTask= tasks.find((todo)=>todo.id===id)
setTask(editeTask.list)
setEditId(editeTask.id)

  }
  return (
    <div className="container">
      <h2>ToDo App</h2>
      <form className="form-group" onSubmit={handleSubmit} >
        
        <input
          type="text"
          value={task}
          ref={inputRef}
          placeholder="Enter New Task"
          className="form-control"
          onChange={(event) => setTask(event.target.value)}
        />

        <button className="add" onClick={addTask}>
      {editId? 'edit':'add'}
        </button>
      </form>
      <div>
        <ul>
         {tasks.map((todo)=>(
         
             <li  className="list-items" key={todo.id}>
               <div className="list-item-list" id={todo.completed? 'list-items':null}>
                {todo.list}
             </div>
         

         <span> 
          <MdTaskAlt
                  className="list-item-icons"
                  id="complete"
                  onClick={()=>handlecomplete(todo.id)}
                />

                <FaEdit
                  className="list-item-icons"
                  id="edit"
                onClick={()=>handleEdit(todo.id)}
                />
                <MdDelete
                  className="list-item-icons"
                  id="delete"
               onClick={()=>onDelete(todo.id)}
                />
              </span>
          </li>
         ))}
        </ul>
      </div>
      
    </div>
  );
}
