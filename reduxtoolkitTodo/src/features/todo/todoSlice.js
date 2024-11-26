// using 2 methods to make slice in reducers 
// nanoid is used to generate unique id which we are using here from redux toolkit

import { createSlice ,nanoid } from "@reduxjs/toolkit";

// in starting how the store look like what is its initial state

const initialState = {
    todos: [{id: 1, text: "hello world"}] // taking default value in store
}


// making slice here with createSlice

export const todoSlice = createSlice ({
    // there are names of slices which we would give them
    name: "todo",  // name of slice
    initialState,  // every slice has its initial state which here defined above
    // we add re ducers here which handle the functionality automatically creates the actions in redux toolkit
    reducers: {  // it consist of properties and functions

        //  state  -> state here have the acess to initial state tells about the current situation about state
        //  action -> takes value for example to remove todo it required id for that todo that would provide by action
       
        addTodo: (state , action)=> {
            const newTodo = {
                 id: nanoid(),
                 text: action.payload   // payload can be payload.id , payload.text
            }
            state.todos.push(newTodo);  // taking current state and pushing new todo and updating the current state of store 
        },  // to add todo we created function in reducer here
        removeTodo: (state , action)=> {
            // over writing the todos and using filter to remove the todo we want to remove by matching the todo id with action
              state.todos=state.todos.filter((eachTodo)=> eachTodo.
               id!== action.payload)

            /*the condition is that each item in the array should have
             an id that does not match the ID in action.payload. 
             This way, the item with the matching id will be excluded
             from the new array, effectively removing it from state.todos.
             Note:- action.payload contains the ID of the to-do item we want to remove
             for example we pass in component :- removeTodo(2)
             so when eachTodo.id === action.payload it would be removed
            */

        }, // to remove todo function is created in this reducer
         
        // (new method added here to update todo)
        updateTodo: (state, action) => {
            const {id, text} =action.payload;   // extracting the id  and text from action.payload

            const uptodo = state.todos.find((eachtodo)=>eachtodo.id ===id) 
            // find the todo with id we want to update or modify

            // if todo matches we update and overwrite in text of that todo 
            if(uptodo){
                uptodo.text = text;
            }
        }
    }
}) 

// we have to export functionalty of reducers which helps individually to update the state,
//  we have to export 2 parts of this slice

export const {addTodo, removeTodo , updateTodo} = todoSlice.actions;
// store needs awareness about these reducers so we
// register the reducers within the store from which
//  it take  values to update them

// exporting every reducers indivially it is compulsory to do so
export default todoSlice.reducer