import React from 'react'
import { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState('')
  //onChange: function to manage the input value: onChange={(event)=>{console.log(event.target.value)}}
  const handleSubmit=(e)=>{
    // Everytime submit, it will reload page --> preventDefault: stop this default
    e.preventDefault();
    //console.log(value)
    addTodo(value)
    setValue('')

  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' placeholder='What is the task today' value={value} onChange={(event)=>{setValue(event.target.value)}}/> 
        <button type='submit' className = 'todo-btn'>Add task</button>
    </form>
  )
}
