import React, {useState, useEffect} from 'react';
import List from './components/List';
import axios from 'axios'
import {baseURL} from "./utilis/constant"
// import todoApp from "./components/todoApp";
// import AI_ML_Enginner from './components/blog2';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const [updateUI, setUpdateUI] = useState(false)

  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`)
    .then((res) => {
      console.log(res.data);
      setTasks(res.data)
    })
    .catch((error) => {
      console.error('Error making Axios request:', error);
    });
  }, [updateUI]);

  const addTask = () =>  {
    axios.post(`${baseURL}/save`, {task: input})
    .then((res) => {
      console.log(res.data);
      setInput("")
      setUpdateUI(setUpdateUI((prevState) => !prevState))  //!updateUI      

    } )
  }

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, {task: input})
    .then((res) => {console.log(res.data);
    setUpdateUI((!updateUI))
    setUpdateId(null);
    setInput("")
    });
  }

  return (
    <main style={{textAlign:'center', justifiedContent: 'center'}}>
      <h2 className="title">Todo App</h2>
      <div className='input_holder'>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <br /><br />
      <button type="submit" onClick={updateId ? updateTask : addTask}>{updateId ? "Update Task": "Add Task"}</button>
    
    <ul>
      {tasks.map ((task) => (
      <List key={task._id} 
      id={task._id} 
      task={task.task} 
      setUpdateUI={setUpdateUI}
      updateMode = {updateMode}
      />
      ))} 
    </ul>
    </main>
  );
}

export default App;
