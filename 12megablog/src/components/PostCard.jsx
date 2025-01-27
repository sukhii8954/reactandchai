/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

const PostCard = ({$id , title , featuredImage}) => {
  return (
    <div>
         {/* variable name is $id here as per appwrite */}
       <Link to ={`/post/${$id}`}>
           <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justlify-center mb-4'>

                   {/* we getting url from fileId from method getfilepreview */}
                  <img className='rounded-xl'  
                  src={appwriteService.getfilepreview(featuredImage)} 
                  alt={title} />
                  {/* featuredImage is in itself is a id and post id is in itself is post these are not same */}

                  
              </div>
               <h2 className='text-xl font-bold' >{title}</h2>
           </div>
       </Link>
    </div>
  )
}

export default PostCard
