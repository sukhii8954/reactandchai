import react from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

function App() {

  
  return (
    <>
       <h1 className='text-5xl font-bold text-white'>Learning about Redux toolkit using Todo</h1>
       <AddTodo/>
       <TodosList/>
    </>
  )
}

export default App