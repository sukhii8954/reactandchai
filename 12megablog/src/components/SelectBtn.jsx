/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React  , {useId}from 'react'

const SelectBtn = ({
      options,  // we get array from options
      label,
      className="", // if user wants to add its own class can get in here
      ...props
      
},ref) => {

    const id = useId();
  return (
    <div className='w-full'>
        {label &&
         <label htmlFor={id} className='' >
           <select {...props} 
           id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white
                text-black outline-none focus:bg-gray-50
                duration-200 border border-gray-200 w-full ${className}`}
           >
              {options ?.map((option)=>(
                <option key= {option} value ={option}>
                    {/* options are in itself unique they can be pass as key also and values are obviously is options */}
                    {options}
                </option>
              ))}
           </select>
        </label>}
    </div>
  )
}
//  we can export as forwardref directly also
export default React.forwardRef(SelectBtn)
