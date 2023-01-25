import React,{useState} from 'react'
import Todo from './Todo';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Todo Management Application</h1>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <button className='btn btn-primary'>Add</button> 
            </form><br/> <br/>
            <Todo todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App