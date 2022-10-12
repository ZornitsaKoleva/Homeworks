import React from "react";

export default function ToDo({todo, handleCompleted, removeTodo}){
    function handleCheckboxClick(){
        handleCompleted(todo.id)
    }
    function handleRemove(){
        removeTodo(todo.id)
    }
    return(
        <div className="list">
           
        <input onClick={handleCheckboxClick} type="checkbox"/>
        <li className="list-group-item lists" style={{
            textDecoration: todo.completed ? "line-through" : null}}>
            {todo.task}
        </li>
        <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
        </div>
    )
}