import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


createRoot(document.getElementById('root')).render(
  // just like in context api we using provider and 
  // passing value =({ todos, addTodo, updateTodo, deleteTodo, toggleComplete })
  // same here we use provider but of react redux and pass store as value here
  <Provider store ={store}> 
    <App />
  </Provider>,
)
