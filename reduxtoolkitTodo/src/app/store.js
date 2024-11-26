import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


// most of the things here take object
export const store = configureStore({
    reducer : todoReducer
}); 