import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Storydetails = ({stories}) => {
    const {id} = useParams();
      
       const [story, setStory] = useState(null);

      useEffect(() => {
        const foundStory = stories.find((s) => s.id === (id));
        setStory(foundStory);
      }, [stories, id]);
    
        if(!story){
            return <p>Loading story...</p>
        }

        const storyContent = story.content || "No content available";
        
  return (
      <section className='p-8'>
        <h2 className='text-3xl mb-4'>{story.heading}</h2>
        <div className = ' bg-gray-400 text-black shadow-lg p-6 rounded-lg'>
            <p>{storyContent}</p>
        </div>   
      </section>
  )
  
}


export default Storydetails
