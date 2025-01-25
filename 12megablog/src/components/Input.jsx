/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React , {useId} from 'react'
  
// using new hook forwardRef to wrap up everything in it 
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className= '',
    ...props   // any other props would spread here

}, ref){   // also passing the reference 
     const id = useId(); 
    return (
       <div className='w-full'>
          {label &&
            <label className='inline block mb-1 pl-1'
        //  genrating unique id with useId   
           htmlFor={id}>  
            {label}
            </label> 
          }
          <input
           type = {type}
            className= {`${className}`}
            ref={ref}
            {...props}
            id = {id}
            //  whatever we take from user we
            // pass as reference as a prop here
            // this is the thing which give reference
            // in our parent component.
            // Note : we got refer from other component
            //  and access of state would pass from here
            />
       </div>
    )
})

export default Input
