import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = ({ stories }) => {
  // Using the navigate hook to redirect to the form
  const navigate = useNavigate();

  return (
    <section className='p-8'>
      <h2 className='text-3xl mb-4'>Welcome to My Home Dashboard</h2>
      <div className='bg-white shadow-lg p-6 rounded-lg'>
        <p>Your Own stories will be displayed here.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
          {stories.length > 0 ? (
            stories.map((story) => (
              <div key={story.id} className="bg-gray-400 p-4 rounded-lg">
                <Link to={`/story/${story.id}`} className='text-blue-500 no-underline'>
                  <h3 className="font-semibold">{story.heading}</h3>
                  <p className="text-gray-700">{story.description || "Click to view full story"}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No stories submitted yet.</p>
          )}
        </div>

        <button onClick={() => navigate("/stories")} className='bg-[#e66f6f] rounded mt-4 p-2'>
          Add new story
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
