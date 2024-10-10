import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "sukhman",
    age: 23
  }
  let myArr = [1,2,3]
  return (
    <>
       <h1 className='font-bold bg-green-500 text-black p-4 rounded-xl mb-4'>Tainwind test</h1>
        <Card username = "chaiaurcode" BtnText="Click me"/>
        <Card  username= "Sukhman" BtnText="visit me" />
    </>
  )
}

export default App
 