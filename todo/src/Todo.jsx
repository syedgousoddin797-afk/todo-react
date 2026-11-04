import React from "react"
import { use, useState } from "react"

function Todo(){
    let [todo,  setTodo] = useState(["sample Task"])
    let [newTodo , setNewTodo] = useState("")

    let addNewTask = () =>{
        setTodo([...todo, newTodo])
    }
    
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
    }

    return(
        <div>
            <input placeholder="enter your task" value={newTodo} onChange={updateTodoValue}></ input>
            <button onClick={addNewTask}>Add</button>
            <br></br><br></br><br></br>
            <h1>Task Todo</h1>
            <ul>
                {todo.map((task)=>(
                    <li>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo