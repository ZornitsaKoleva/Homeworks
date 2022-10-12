import React from "react";
import ToDo from "./ToDo"

export default function ToDoList({todos,handleCompleted,removeTodo}){
    return(
        <div >
            <div className="formContainer"  >
            <h3>Your to do list:</h3>
            </div>
        <ul className="list-group listConatiner">
           {todos.map(todo=>
          (<ToDo key={todo.id} todo={todo} handleCompleted={handleCompleted} removeTodo={removeTodo}/>)
            )}
        </ul>
        </div>
        
    )

}