import React, { useEffect, useState } from 'react';
import './App.css';
import Forms from './Component/Form/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Component/TodoList/TodoList';


function App() {
  //State stuff
  const [inputText, SetInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  // UseEffect 
  useEffect(()=>{
    filterHandler()
  },[todos,status])

  //Function 
  const filterHandler =() =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed === false))
        break;
        default :
         setFilteredTodos(todos)
         break;
    }
  }
  return (
    <div className="App">
      <h1 className="text-center text-light">ToDo List</h1>
      <Forms inputText={inputText}
        todos={todos} setTodos={setTodos}
        SetInputText={SetInputText}
        setStatus={setStatus}
        >
        
      </Forms>
      <TodoList 
      setTodos={setTodos}
      todos={todos} 
      filteredTodos={filteredTodos}
      >
      
      </TodoList>
    </div>
  );
}

export default App;
