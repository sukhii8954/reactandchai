import { useCallback, useState } from 'react'

function App() {
  let [length , setLength] = useState(8);
  let [numbers, setNumber] = useState(false);
  let [characters , setCharacters] = useState(false);
  let [Password , setPassword] = useState("");
    
    const passwordGenerator =  useCallback(()=>{
         let pass = ""
         let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

         if(numbers){
             str +="0123456789"
         }

         if (characters) {
           str +="!@#$%^&*_+=[]{}~`"
         }


         for(let i =1 ; i<=length ; i++){
           let char =Math.floor(Math.random() * str.length +1);
            pass = str.charAt(char)
         }
          setPassword(pass)

    } , [length,numbers,characters,setPassword])

  return (
    <>
      <div className='w-ful max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'> 
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input className='outline-none w-full py-1 px-3'
    value={Password}
     type="text"
     placeholder='password'
     readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range" 
              min ={6}
              max= {100} 
              value ={length}
              className='cursor-pointer'
              onChange={(e)=> {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div>
            <input   type = "checkbox"
             defaultChecked = {numbers}
             id ="numberInput"
             onChange={()=>{
              setNumber((prev) => !prev)
             }} />
             <label htmlFor="numberInput">Numbers</label>
          </div>
        </div>
       </div>

    </>
  )
}

export default App