import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5  --> we can't use this variable in react
  // we use hooks in react js as variable

  let [counter, setCounter] = useState(5)

  const addValue = function(){
    // console.log("clicked",Math.random())
    //  counter = counter+1  
    //  how to show on UI ?? here the hooks come in the game
    if(counter<20){
      setCounter(counter+1); 
    }
  }

  const removeValue = function(){
       if(counter>0){
         setCounter(counter-1);
       }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}
      >Add Value</button>
      <br/>
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
