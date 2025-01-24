/* eslint-disable no-unused-vars */
import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from  '../../store/authSlice'

const LogoutBtn = () => {

     const dispatch = useDispatch()

      const logoutHandle = ()=> {
         authService.logout()  // if the user get logged out then we dispatch logout from store and imp info from store stay upto date
         .then(()=>{
            dispatch(logout())
        .catch((error)=> {
            throw error
        })
         })
      }
  return (
    <button onClick={logoutHandle}
    className='inline-block px-6 py-2 duration-200
      hover:bg-blue-300 rounded-full'>
        Logout
    </button>
  )
}

export default LogoutBtn
