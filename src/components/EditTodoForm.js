import React from 'react'
import { useState } from 'react'

export const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue] = useState(task.task)
  //onChange: function to manage the input value: onChange={(event)=>{console.log(event.target.value)}}
  const handleSubmit=(e)=>{
    // Everytime submit, it will reload page --> preventDefault: stop this default
    e.preventDefault();
    //console.log(value)
    editTodo(value,task.id)
    setValue('')

  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' placeholder='Update task' value={value} onChange={(event)=>{setValue(event.target.value)}}/> 
        <button type='submit' className = 'todo-btn'>Update Task</button>
    </form>
  )
}
