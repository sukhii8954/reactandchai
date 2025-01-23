import { createSlice } from "@reduxjs/toolkit";

// this creating slice is used to track the authentication 
// to check user autheticated or not.

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({

    name: "auth",
    initialState,
    // we have to export individual functions of reducers
    // so that diff components can use that functions to get to know 
    // the state or to do dispatch with methods(functions).
    reducers:{
    // state : initialstate and its value can update and get
    // tracked furthur.

    // action: we get payload from this (payload refers 
    // to the data that is sent along with an action to 
    // provide the necessary information to update the 
    // state.)
    
      login: (state, action)=> {
             
        //   state getting updated here
          state.status = true;
          state.userData = action.payload.userData;
      }, 

      logout: (state)=>{

        state.status= false;
        state.userData=null;
      }

    }
});
//   the methods within the reducers are called actions
export const {login,logout} = authSlice.actions;

export default authSlice.reducer;

