import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todo.js'

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const disptach = useDispatch()

  const addNewTodo = (e) => {
    e.preventDefault();
    disptach(addTodo(newTodo))
    setNewTodo('')
  }

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <input 
          type="text" 
          placeholder='Learn JavaScript ...' 
          value={newTodo} 
          onInput={(e) => setNewTodo(e.target.value)}
          style={{ padding: '5px 10px', fontSize: '1.2rem' }}
        />
        <button 
          type="submit"
          style={{ padding: '6px 10px', fontSize: '1.2rem', border: 'none', backgroundColor: 'black', color: 'white'}}
        >Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo