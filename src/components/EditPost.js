import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost, deletePost } from '../api';

const EditPost = ({ posts, token }) => {
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  const {title, description, location, price, willDeliver} = currentPost;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

  const navigate = useNavigate();

  
  async function editPost() {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    
    const updatesPost = await updatePost(updatedPost)
    navigate('/posts'); 
    console.log(updatesPost)
  }
  
  
  return (
    <form className='editForm' onSubmit={ (ev) => {
      ev.preventDefault();
      editPost();
      
    }}>
      <input className='editTitle'
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
    
      <br></br>

      <input className='editDescription'
        type='text'
        placeholder={description}
        onChange={(ev) => setNewDesc(ev.target.value)}
      />

      <br></br>

      <input className='editLocation'
        type='text'
        placeholder={location}
        onChange={(ev) => setNewLocation(ev.target.value)}
      />

      <br></br>

      <input className='editPrice'
        type='text'
        placeholder={price}
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
      <button onClick={() =>{ 
      deletePost(token,postID);
      }}>       
      Delete</button>
    </form>
  )
}

export default EditPost;