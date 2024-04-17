import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions/todo.js'

function Todo({ todo, todoIndex }) {
  const dispatch = useDispatch()
  return (
    <div style={{ border: '1px solid #EEE', margin: '5px 0', padding: '5px 10px', display: 'flex', justifyContent: 'space-between' }}>
      {todo}
      <button onClick={() => dispatch(deleteTodo(todoIndex))}>X</button>
    </div>
  )
}

export default Todo