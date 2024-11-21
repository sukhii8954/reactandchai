import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // it is a  value which we had passed from form of todos down below
    // we take the acess of previous state i.e no of todos previously and also we can add new todo from this function
    //  taken old values and spreaded here with new ones
    // as we made obj in context.js which consist some values of todos

    setTodos((prevtodo) => [{ id: Date.now(), ...todo }, ...prevtodo]);
    //   id will generate unique everytime here and baaki ki values todo mai spread krdenge hm idhr
    //  where todo in his own self is an object jisme baaki ki values as it is pass krenge hm isme
  };

  const updateTodo = (id, todo) => {
    // todos is an array we apply loop on it with the help of id we can update the particular todo
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    ); // prevtodo is here individual todo and prevtodo.id is id of each todo in the array
  }; // if id matches we update new todo otherwise let the prevtodo as it is

  const deleteTodo = (id) => {
    // here using filter so that whose id doesn't match we take that prev todo which matches that we have to delete so voh filter out hojyega

    setTodos((prev) => prev.filter((neededTodo) => neededTodo.id !== id));
  };

  const toggleComplete = (id) => {
    // here when we find the same id which we want to toggle , we keep the remaining value as it is ( added by spread operator) and doing opposite of its prev completed value

    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // local storage functionality handling here in same project with context API topic
  //  we use useeffect and fetch from local storage

  useEffect(() => {
    // key
    const todos = JSON.parse(localStorage.getItem("todos")); // getting the values from local storage and we get in form of string we convert it into JSON
    //  checking if there is any item then only set it
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []); // dependency would be empty array here

  // one option to store after getting the todo and setting in localstorage

  useEffect(() => {
    // key : value(converting in string
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    //   todos is an array here and rest are methods passed from context.js
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-4">
            Manage your Todos
          </h1>
          <div className="mb-4">
            {/* todo form adding here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* looping and adding todo items here */}
            {todos.map((todo) => (
              // taking id to make every todo unique div as in map(loop) it get repeat
              <div className="w-full" key={todo.id}>
                {/* for each todo item separate div will be created with unique id and will pass todo as props */}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
