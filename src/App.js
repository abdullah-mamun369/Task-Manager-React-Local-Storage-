import './App.css';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import DeleteTask from './Components/DeleteTask';

function App() {
  return (
    <div>
      <AddTask></AddTask>
      <UpdateTask></UpdateTask>
      <DeleteTask></DeleteTask>
    </div>
  );
}

export default App;
