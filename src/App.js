import './App.css';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';
import TodosCrossed from './components/TodosCrossed';

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <TodosList></TodosList>
      <TodosCrossed></TodosCrossed>
    </div>
  );
}

export default App;
