
import React from "react";
import{ useState } from "react";
import { v4 as uuid } from 'uuid';





export default function ToDoForm({addTodo}){

const [todo, setTodo] = useState({
    id:"",
    task:"",
    completed: false
})

function handleTaskInput (ev){
    setTodo({...todo, task: ev.target.value})
}
function handleSubmit (ev){
    ev.preventDefault();
    if(todo.task.trim()){
       addTodo({...todo, id: uuid()});
       setTodo({...todo, task:""})   //reset task input
    }

}
    return(
        <div className="formContainer" >
             <img style={{height:60}} src="./4697260-removebg-preview.png"></img>
        <form className="form-group form" onSubmit={handleSubmit}>
            <textarea className="form-control" name="task" type="text" value={todo.task} onChange={handleTaskInput} placeholder="Write your task here"></textarea>
            <button className="btn btn-primary" type="submit">Create a task</button>
        </form>
        </div>
    )
    
}
