import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import store from './store/index.js'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ width: '500px', margin: '20px auto' }}>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
