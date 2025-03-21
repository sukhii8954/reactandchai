/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React  , {useId } from 'react'

const SelectBtn = ({
      options =[],  // we get array from options , options : which we see in dropdown
      label,   // input type field ke liye label dena padega to care of accessibilty
      className="", // if user wants to add its own class can get in here
      ...props
      
},ref) => {  // without ref parent component would not get directly connected to <select> 

    const id = useId();   // useId imported from react 
  return (
    <div className='w-full'>
        {label &&  // if there is label then we display label
        // htmlFor is used to associate label with specific form control (<select>)
         <label htmlFor={id} className='' ></label>}
           <select {...props}  // whatever user has given pass as props here
           id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white
                text-black outline-none focus:bg-gray-50
                duration-200 border border-gray-200 w-full ${className}`}
           >
              {options ?.map((option)=>(  // if we have options then we loop on it that's why we using ?. ternary operator
                <option key= {option} value ={option}>
                    {/* options are in itself unique they can be pass as key also and values are obviously is options */}
                    {option}
                </option>
              ))}
           </select>
    </div>
  )
}
//  we can export as forwardref directly also
export default React.forwardRef(SelectBtn)   // we can use forwardref as this also
