import React from 'react';
import { createPost } from '../api';


const CreatePost = ({ token, fetchPosts, navigate }) => {
  const newPost = {
    title: 'Mystery Box',
    description: "This could be worth the gamble or a complete waste of time and money.",
    price: "$3.50",
    location: 'LA',
    willDeliver: false
  }
  
  async function addPost() {
    const results = await createPost(token, newPost)
    fetchPosts();
    navigate('./posts')
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <button className="Button" onClick={() => addPost()}>Create a New Post</button>
  )
}

export default CreatePost;