import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoView from './components/ToDoView';
import TodoState from './context/TodoState';

function App() {
  
  return (
    <div className="App">
      <h1> Context API </h1>
      <TodoState>
        <ToDoForm />
        <ToDoView />
      </TodoState>
    
    </div>
  );
}

export default App;
