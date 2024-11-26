import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo,removeTodo,updateTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    
    // we will add values through input so we are making state with input and setinput

    const [input, setInput] = useState("");
    
    // we use links that helps in wire up react with reduxtoolkit 
    // which help to dispatch the value from here 
    const dispatch = useDispatch()
    // Note: --> useDispatch uses the reducers and make the changes in the store

    // we making a method to uses Usedispatch
    //  to dispatch the value and this function triggered when form get submit

     const addTodoHandler = (e) => {
        e.preventDefault()  // preventing form not to get autosubmit
                                // dispatch ke andr hi reducer ke function ko call krna padta h
        dispatch(addTodo(input)) // whatever user enters in input field in form in send through with the help of reducers in store
        // after using the input field we have to clean that field
        setInput("");
    }


  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
