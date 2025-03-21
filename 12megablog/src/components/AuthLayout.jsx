/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Note : this component is a syntax we are creating 
 it is a mechanism , by which it is use to protect pages and routes 
 i.e it is a protection mechanism  can be used to decide  whether to show the value or not 
*/
import React  , {useState , useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication = true}) {


    const navigate = useNavigate();
    const [loader , setLoader] = useState(true);
    // we ask from authstatus that it is logged in or not , so we ask from store
    const authStatus = useSelector(state => state.auth.status)
    
    useEffect (() => {
            //   easy code without using authentication:
                // if(authStatus === true){
                //      navigate("/");
                // } else if(authStatus === false){
                //     navigate("/login");
                // }
           
            //  complex code : 
            //  logic : (we check if we got anything from user and authstatus in store is false which is not equal to authtentication which means user not logged in yet) so ..
            // true && false !== true (which means true)
            //  true && true (both are true then we redirect user to login page)
                
            //   instead of also implementing this logic we can simply use:
            //  let authValue = authStatus === true ? true : false 
                //  and can write this authValue after && 
                
             if(authentication && authStatus !== authentication){
                 navigate("/login")
             } 
            //    if not true means false &&  true !== true  --> false && false 
             else if(!authentication && authStatus !== authentication){
                navigate("/");
             }

             setLoader(false);
    } , [authStatus, navigate,authentication])
      

    {/*  on the basis of loader we show to the user */} 
    //  if loader true : loading...  if it not true then we display children to the user means whatever we pass as a children in this component
  return  loader ? <h1>Loading...</h1> : <>{children}</>
   
  
}


