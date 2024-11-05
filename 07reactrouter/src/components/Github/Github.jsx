import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    // we can get data directly with the help of this hook and this internconnected with loader method of react-router-dom
    const data= useLoaderData(); 
    

    //  const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then(response => response.json())
    //   .then(data=> {
    //      setData(data)
    //   })
    // }, [])
      // console.log(data.followers)
  return (
    //   here data variable had fetched all data from api 
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data?.followers} 
        <img className='text-center'
          src={data?.avatar_url} alt="Git Picture" width={300} />
        </div>
  )
} 

export default Github
//  to use Loader we need to use hook called useLoaderdata 
export const githubLoader = async ()=> {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();  // Note:- it is acutally a promise we can directly return without using .then
}