import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Storypage from './Components/Storypage';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';  // Remove BrowserRouter here
import { useState } from 'react';
import Storydetails from './Components/Storydetails';

function App() {
   
  function generateUniqueId() {
    return Math.floor(Math.random() * 1000000) + Date.now().toString();
  }
    const [stories, setStories] = useState([]);

    const addStory = (newStory) => {
      if (!newStory.id) {
        newStory.id = generateUniqueId().toString(); // Replace with your unique ID generation logic
      }
        setStories([...stories,{
          ...newStory,
           id: newStory?.id?.toString(),
          content: newStory.story}]);
    };

    return (
        <div className='App'>
            <Navbar />
            <main className='container mx-auto'>
                <Routes>
                   
                <Route path="/" element={<Dashboard stories={stories} addStory={addStory} />} />
          <Route path="/stories" element={<Storypage addStory={addStory} />} />
          <Route path='/story/:id' element={<Storydetails stories={stories} />} />
                 </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
