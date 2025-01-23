/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from  'react-redux'
import authService from './appwrite/auth';
import {login , logout} from './store/authSlice'
import { Outlet } from 'react-router-dom';
import  {Header , Footer} from './components'
function App() {

// console.log(import.meta.env.VITE_APPWRITE_URL);

 const [loading , setLoading] = useState(true);
 const dispatch = useDispatch();
  
 
 useEffect(()=> {
   authService.getCurrentUser()
   .then((userData)=> {
       if(userData){
        dispatch(login({userData}))
       }
       else{
        dispatch(logout())  // if not logged in then user stay logout
       }
   })

   .catch((error)=> {
      console.log("Oh Ho.... : you are not logged in yet", error);
      throw error;
   })
   .finally(
     ()=> setLoading(false) // jabh sara kaam hojye toh loading bndh hojaye and data display hojaye
   )
 })
   // if it loading is false or if it is true then changing it false
    return  !loading ? (
        <div className=' flex flex-wrap content-between '>
            <div className='w-full block'>
              <Header/>
               <main>
               TODO: {/* <Outlet/> */}
               </main>
              <Footer/>
            </div>
        </div>
    ) : (
      // will apply some loading animation afterwards
      <div>loading...</div>
    )

}

export default App
