import React, { useContext } from "react"
import { createContext } from "react"

export const  TodoContext = createContext({
todo:[
    {
        id:1, 
        todo:"TODO!",
        completed:false,
    }
],
addTodo: (todo) => {},
updateTodo: (id,todo) => {},
deleteTodo: (id) => {},
completeTodo: (id) => {}
}) 
 export const useTodo = ()=>{
    return useContext(TodoContext)
 }
 export const TodoProvider = TodoContext.Provider;
