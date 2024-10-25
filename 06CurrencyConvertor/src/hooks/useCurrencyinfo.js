import { useEffect, useState } from "react";

// creating a custom hook 

function useCurrencyInfo (currency){
      const [data, setData] = useState({})
     useEffect(()=>{

        // data fetched in form of string converting into json format
          
         fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
         .then((response)=> response.json())

        //    taking out or parsing out the data converted in json form

         .then((response) =>setData(response[currency]))
         console.log(data)
     },[currency])  
     
     // whenever there is a change 
     // in currency it would get called this is the dependency array

    // console.log(data) 
    return data;
    
} 


export default useCurrencyInfo;