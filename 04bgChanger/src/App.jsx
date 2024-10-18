import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("gray");


  return (
    <>
      <div className='w-full h-screen duration-200'
      style ={{backgroundColor: color}}> 
      <h1 className='text-white text-4xl'>Bg Changer</h1>
        <div className='fixed flex flex-wrap items-center justify-center bottom-12 inset-x-0 px-2'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
                <button onClick={()=> setColor("red")} className='outline-none px-4 bg-red-600 rounded-full py-1 text-white shadow-lg text-2xl'>Red</button>
                <button onClick={()=> setColor("green")} className='outline-none px-4  bg-green-600 rounded-full py-1 text-white shadow-lg text-2xl'>Green</button>
                <button onClick={()=> setColor("blue")}  className='outline-none px-4 bg-blue-600 rounded-full py-1 text-white shadow-lg text-2xl'>Blue</button>
                <button onClick={()=> setColor("purple")}  className='outline-none px-4 bg-purple-500 rounded-full py-1 text-white shadow-lg text-2xl'>purple</button>
                <button onClick={()=> setColor("yellow")}  className='outline-none px-4 bg-yellow-600 rounded-full py-1 text-white shadow-lg text-2xl'>yellow</button>
                <button onClick={()=> setColor("orange")}  className='outline-none px-4 bg-orange-600 rounded-full py-1 text-white shadow-lg text-2xl'>Orange</button>
                <button onClick={()=> setColor("lavender")}  className='outline-none px-4 bg-purple-300 rounded-full py-1 text-white shadow-lg text-2xl'>lavender</button>
                
              </div>
        </div>
      </div>
    </>
  )
} 

export default App
