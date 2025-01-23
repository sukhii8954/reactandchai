import { createSlice } from "@reduxjs/toolkit";

// Initial state for posts
const initialState = {
  posts: [], // Array to hold all posts
};


const postSlice = createSlice({


  name: "posts",
  initialState,
  reducers: {
    // Action to add a new post

    addPost: (state, action) => {
      state.posts.push(action.payload); // Add the new post to the posts array
    },

    // Action to update a post by ID
    updatePost: (state, action) => {
      const { id, updatedData } = action.payload; // Destructure id and updated data
      const postIndex = state.posts.findIndex((post) => post.id === id); // Find the post by id

      if (postIndex !== -1) {  // means id would be >=1
        state.posts[postIndex] = {
          ...state.posts[postIndex],
          ...updatedData, // Update the post with new data
        };
      }
    },

    // Action to delete a post by ID
    deletePost: (state, action) => {
      const postId = action.payload; // ID of the post to delete
      state.posts = state.posts.filter((post) => post.id !== postId); // Filter out the post
    },

    // Action to set all posts (useful for fetching posts from an API)
    setPosts: (state, action) => {
      state.posts = action.payload; // Replace the posts array with fetched data
    },
  },
});

// Export the actions
export const { addPost, updatePost, deletePost, setPosts } = postSlice.actions;

// Export the reducer
export default postSlice.reducer;
