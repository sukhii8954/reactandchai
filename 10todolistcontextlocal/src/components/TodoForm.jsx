import React, { useState } from "react";
import { UseTodo } from "../contexts/TodoContext";

const TodoForm = () => {
   const [todo, setTodo] = useState("")
// as we had extracting the context with usecontext
// and storing it in usetodo which consist all values and methods.
    const {addTodo} = UseTodo()

    const add =(e)=> {
        e.preventDefault()

        if(!todo) return  // if there is nothing in todo then return
       
        // as we spreading the values in addtodo function which is consisting array which is having objects
        // so we pass object because arrays ke andr objects hai
        addTodo({todo, completed: false})  // vha function mai joh spread ho rahe h idhr add hojyegi or id vaise bhi unique h voh generate hokr ajyegi todo ke sath
        // after adding the todo we make the field empty 
        setTodo("");
      }


  return (
    <>
      <form onSubmit ={add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          // wiring up input with state i.e with todo state
          value ={todo} 
          onChange= {(e)=> setTodo(e.target.value)} 
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
