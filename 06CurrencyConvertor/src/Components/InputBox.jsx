import React, { useId } from 'react'
  
    
const InputBox = ({label ,
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyOption = [],
    selectCurrency= "usd",
    // optionals 
      amountDisable = false,
      currencyDisable = false,

     className = "",
    }) =>

      // using useId hook for generating unique ID that label can be linked with input field 
         
    { 
      // for optimization 
      const id = useId()
  return (
     // if a user want to add its own css then it can enter in classname 
    <div className={`bg-white p-3  rounded-lg text-sm flex ${className}`}> 
       <div className='w-1/2 '>
           <label  htmlFor={id} className='text-black/40   inline-block'>
            {label} </label>
           <input id={id} 
           type="number"
           className='outline-none w-full bg-transparent py-1.5'
           placeholder='amount'
           disabled ={amountDisable} 
           value={amount}

           // using && --> to check if onamountchange is available then we use onamountchange
           onChange={(e)=> onAmountChange && 
           onAmountChange(Number(e.target.value))}/> 
           {/* value we get may be in string so we converting in number here */}

       </div>
         <div className='w-1/2 flex flex-wrap justify-end text-right'>
          <p className='text-black/40 w-full'>Currency Type</p>
          <select className='rounded-lg px-4 text-black/40 py-0 bg-gray-100 cursor-pointer outline-none'
            value = {selectCurrency}
            onChange = {(e) => oncurrencyChange &&
            oncurrencyChange(e.target.value)}
            disabled = {currencyDisable}
          >
     {/* whenever use loop in jsx we have to pass a key */}
           {currencyOption.map((curr)=>(
            <option key = {curr} value = {curr}>
               {curr}
           </option>))}
             
          </select>

         </div>
    </div>
  )
}

export default InputBox;
