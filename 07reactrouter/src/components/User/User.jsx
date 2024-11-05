import React from 'react'
import {useParams} from 'react-router-dom'
    
// taking dynamic data that enter in url will display on UI 
// useParams hook help to access the of the  parameters (current parameter we write in URL) of URL and can manage the dynamic routes of URL 

const User = () => {
    // syntax for useParams
    const {id} = useParams()
    // we get object in console whatever parameter we write in URl
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User: {id}
    </div>
  )
}

export default User
