import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Storypage = ({addStory}) => {
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [heading, setHeading] = useState("");
  const location = useLocation();
  const [submittedStories, setSubmittedStories] = useState([])
  //  limiting the length of story
  useEffect(() => {
    const storedStories = localStorage.getItem("submittedStories");
    if (storedStories) {
      setSubmittedStories(JSON.parse(storedStories));
    }
  }, []);

  // Save submitted stories to local storage when they change
  useEffect(() => {
    localStorage.setItem("submittedStories", JSON.stringify(submittedStories));
  }, [submittedStories]);

  
  const handleLength = (el) => {
    el.preventDefault();

    if (heading.length < 3) {
      setError("Heading must be at least 3 characters long.");
      setMsg("");
      return;
    }

    if (story.length < 5) {
      setError("story must be Five characters long.");
      setMsg("");
      return;
    }
      // no change in error state to display letting it empty
      setError("");

      // console.log("Story submitted Successfully:", story);

      // displaying success msg
      setMsg("story submitted successfully");
      // setting story to empty again so as to add new story
      setHeading("");
      setStory("");
      
      addStory && addStory({heading,story});

      navigate(location?.state?.from || "/");
    


  };
  return (
    <>
      <form
        onSubmit={handleLength}
        className="bg-gray-300 p-6 rounded-lg shadow-lg"
      >
        <h2>Add New Story</h2>

        {/* Heading input */}
        <input
          type="text"
          name="heading"
          id="storyHeading"
          value={heading}
          className="border-2 p-2 w-full text-xl mb-4 text-zinc-600 font-mono"
          onChange={(el) => setHeading(el.target.value)}
          placeholder="Story Heading..."
        />

        <textarea
          name="textfield"
          id="storycontent"
          value={story}
          className="border-2 p-2 w-full h-30 text-zinc-700 font-mono"
          onChange={(el) => setStory(el.target.value)}
          placeholder="Write your story..."
        ></textarea>
        {error && <p className="text-red-500 p-2 m-2">{error}</p>}
        <button type="submit" className="bg-red-300 p-2 rounded mt-4">
          Submit
        </button>
      </form>

      {/* displaying at UI success msg */}
      {msg && <p className="text-green-500 mt-4">{msg}</p>}
     
    </>
  );
};

export default Storypage;
