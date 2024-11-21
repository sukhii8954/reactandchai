import { createContext,useContext } from "react";

  
// storing the  context method which is holding an object
export const TodoContext =createContext({
   
     // values taking from todos properties
     todos: [
         {
            id: 1,
            todo: "Todo msg",
            completed: false,
         }     
     ],
      
    // whereever we passing id  which is required to deal to update , delete or toggle the todo

     addTodo: (todo) => {},
     updateTodo: (id, todo) => {},
     deleteTodo: (id) => {},
     toggleComplete: (id) => {},
    }) 

export const UseTodo = ()=> {  
    // it is a method which return a usecontext which takes the context and exporting it 
    return useContext(TodoContext) // usecontext takes context which is like a topic about which we are talking about 
}


export const TodoProvider = TodoContext.Provider