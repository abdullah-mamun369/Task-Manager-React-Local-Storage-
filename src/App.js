import './App.css';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import DeleteTask from './Components/DeleteTask';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='h-screen bg-slate-100'>
      <Navbar></Navbar>
      <AddTask></AddTask>
      {/* <UpdateTask></UpdateTask>
      <DeleteTask></DeleteTask> */}
    </div>
  );
}

export default App;
