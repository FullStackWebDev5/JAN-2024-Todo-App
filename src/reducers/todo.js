import { ADD_TODO, DELETE_TODO } from '../actions/todo.js'

const initialState = {
  todos: [
    'Go to swim',
    'Read new novel',
    "Revise today's lecture",
    "Prepare for interviews"
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case DELETE_TODO: {
      let newTodos = state.todos.filter((todo, index) => index !== action.payload)
      
      return {
        ...state,
        todos: newTodos
      }
    }
    default:
      return state
  }
}

export default reducer