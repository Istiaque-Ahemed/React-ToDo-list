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

  useEffect(()=>{
    getLocalTodos()
  },[])
  // UseEffect 
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
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
  // Save to local  
  const saveLocalTodos = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos = ()=>{
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
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
