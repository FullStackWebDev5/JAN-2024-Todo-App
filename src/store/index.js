import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import todoReducer from '../reducers/todo.js'

const reducer = combineReducers({
  todoReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store