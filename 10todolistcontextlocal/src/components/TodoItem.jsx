import React, { useState } from "react";
import { UseTodo } from "../contexts";

const TodoItem = ({todo}) => {  // object passed as prop here which named as todo here
   
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo) // here  .todo: is from the Todocontext.js where it is written todo: "here msg" in object
  const{toggleComplete , updateTodo , deleteTodo} = UseTodo()



   const editTodo = ()=>{
    // updateTodo(id , todo) :- as declared
    updateTodo(todo.id, {...todo, todo: todoMsg})  // whatever msg would be set will pass here in existing todo to get updated
    setIsTodoEditable(false)
  }
  const toggleCompleted =()=> { // local method
    toggleComplete(todo.id)  // coming from context
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
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
         onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return; 
     // todo.completed === true), the function immediately exits (return) and does nothing. This ensures you cannot edit a completed todo.


          if (isTodoEditable) { //If true,                       
            editTodo();  // the button calls the editTodo() function.
                //  This saves the current message (todoMsg) into the todo list by updating the context.
          } else setIsTodoEditable((prev) => !prev); //clicking the button will toggle isTodoEditable to true by flipping its value. This enables editing mode.
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
