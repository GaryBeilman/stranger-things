import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  function postMatches(post, string) {
      const{ title, description} = post;
  
      if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
          return post;
      }
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method 
  }
  
  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div className='outerDiv' id='outer div element'>
       <div className='searchedPost'>
          <form onSubmit={(event) => {
              event.preventDefault();
          }}> 
            <input
             type = 'text'
             placeholder = 'Search'
             onChange = {(event) => setSearchTerm(event.target.value)}
            ></input>
            <button type='Search'>Search</button>
            <button id="btn" > <Link to={'/posts/create-post'}>New</Link></button>
           </form>  
          </div>
    {
      postsToDisplay.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
        return (
          <div className='postHolder' key={_id}>
            <h3 className='postTitle'>{title}</h3>
            <p className='postDescription'>Description: {description}</p>
            <p className='postPrice'>Price: {price}</p>
            <p className='postLocation'>Location: {location}</p>
            {
              isAuthor ? (
                
              
                
                
                <button>
                  <p className='isAuthor'>Is Author </p>

                  <br></br>

                  <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                  
                </button>
              ) : (
                
                <button>
                  <Link class="ViewButton" to={`/posts/${_id}` }>View</Link>
                </button>
              )
            }
          </div>
        )
      })
    }
  </div>
  )
}


export default Posts;