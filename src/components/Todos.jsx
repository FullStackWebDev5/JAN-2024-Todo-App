import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

function Todos() {
  const todos = useSelector(store => store.todoReducer.todos)
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} todoIndex={index} />
      ))}
    </div>
  )
}

export default Todos