import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newWillDeliver, setNewWillDeliver] = useState(false);
  
  
  async function addPost() {
    const newPost = {
      title: newTitle,
      description: newDescription,
      price: newPrice,
      location: newLocation,
      willDeliver: newWillDeliver
    }

    const results = await createPost(token, newPost)
    fetchPosts();
    navigate('/posts')  
  }
  
//   return (
//     // This needs to be a form that accepts the 5 request parameters for creating a post
//     <button onClick={() => addPost()}>Create a New Post</button>
//   )
// }

return (
  <form onSubmit={(ev) => {
    ev.preventDefault();
    addPost(); 
  }}>
    <input className='editTitle'
      type='text'
      placeholder="title"
      onChange={(ev) => setNewTitle(ev.target.value)}
    />
  
    <br></br>

    <input className='editDescription'
      type='text'
      placeholder="description"
      onChange={(ev) => setNewDescription(ev.target.value)}
    />

    <br></br>

    <input className='editLocation'
      type='text'
      placeholder="location"
      onChange={(ev) => setNewLocation(ev.target.value)}
    />

    <br></br>

    <input className='editPrice'
      type='text'
      placeholder="price"
      onChange={(ev) => setNewPrice(ev.target.value)}
    />

    <br></br>
    Will Deliver
    <input className='newWillDeliver'
      type='checkbox'
      checked={newWillDeliver}
      onChange={(ev) => setNewWillDeliver(ev.target.checked)}
    />
    <br></br>
    <button type='submit'>Submit</button>
  </form>
)
}



export default CreatePost;