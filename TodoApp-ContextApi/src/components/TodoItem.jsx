import React, { useEffect, useState } from 'react'
import { useTodo } from '../context/TodosContext';


function TodoItem({todo}) {
 const  {updateTodo, deleteTodo,toggleComplete} = useTodo();
 const [isTodoEditable,setTodoEditable] = useState(false);
 const [todoMsg,setTodoMsg ] = useState("");
  useEffect(()=>{
    if(todo){ 
        setTodoMsg(todo.todo)
    
    }
  },[todo]) 
  

// console.log(todoMsg)
 const edit = ()=>{
    updateTodo(todo.id,{...todo, todo : todoMsg})
    setTodoEditable(false)
 }

 const toggleTodo =  ()=>{
    toggleComplete(todo.id)
 }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
            checked ={todo.completed}
            onChange={toggleTodo}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        readOnly = {!isTodoEditable}
        onChange={(e)=>setTodoMsg(e.target.value)}
          />
          {  !todo.completed &&
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
         onClick={()=>{
            if(todo.completed)  return
            if(isTodoEditable){
               edit()
            }else{
                setTodoEditable((pre)=>!pre)
            }
         }}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
        }
        
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}


          >
              ❌ 
          </button>
      </div>
  );
}

export default TodoItem;