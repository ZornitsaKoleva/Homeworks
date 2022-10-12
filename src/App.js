import React, {useEffect, useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
const LOCAL_STORAGE_KEY = "todo-list";



function App() {
const [todos, setTodos] = useState([]);

useEffect(()=>{
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storageTodos){
    setTodos(storageTodos)
  }
},[]);

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos]);

function handleCompleted(id){
  setTodos(
    todos.map(todo=>{
      if(todo.id === id){
        return{...todo, completed: !todo.completed}
      }
      return todo;
    })
  )
}

function addTodo(todo){
  setTodos([todo,...todos]);

}
function removeTodo(id){
setTodos(todos.filter(todo=>todo.id !== id))
}
  return (
    <BrowserRouter>   
    <Navigation/> 
    <Routes>
        <Route path='*' element={<div>Error</div>}/>
        <Route path='/create-to-do' element={
             <div className="App">
             <ToDoForm addTodo={addTodo}/>
             <ToDoList todos={todos} handleCompleted={handleCompleted} removeTodo={removeTodo}/>
              </div>} 
           />
        <Route path='/home' element={<div>This is our home page</div>}/>
        <Route path='/history' element={<div>History</div>}/>



    </Routes>
  </BrowserRouter>


 
  );
}

export default App;
