import React from "react"
import { use, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


function Todo(){
    let [todo,  setTodo] = useState([{task:"sample Task", id: uuidv4() }])
    let [newTodo , setNewTodo] = useState("")

    let addNewTask = () =>{
        setTodo((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}]
        })
        setNewTodo("")
    }
    
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodo(todo.filter((tod)=> tod.id != id));
    }

    return(
        <div>
            <h1>TODO</h1>
            <input placeholder="enter your task" value={newTodo} onChange={updateTodoValue}></ input>
            <button onClick={addNewTask}>Add</button>
            <br></br><br></br><br></br>
            <h1>Task Todo</h1>
            <ul>
                {todo.map((todo)=>(
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo