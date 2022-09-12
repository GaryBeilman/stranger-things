import React from 'react';
import {Link} from 'react-router-dom';

const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;
  
  console.log(user)
  
  return (
    <div>
      <div>
        <h1>Messages from other users!</h1>
        {
          messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {username} = message.fromUser;
            const {title} = message.post;
            
            if (userID !== fromUserID) {
              return (
                <div key={message._id}>
                  <p className='fromUser'>From User: {username} </p>
                  <p className='Messsage'>Message: {message.content}</p>
                  <p className='postReference'>Post Reference: {title}</p>
                </div>
              )
            }
          })    
        }
      </div>
      <div>
        <h1>Messages from You!</h1>
        {
        messages.map(message => {
            const{content, fromUser, post,_id}=message
            if (userID === fromUser._id) {
              return (
                <div>
                <div key={_id}>{content}</div>
                <p>Message
                  <Link 
                  to = {`path=/posts/:${post._id}`}
                  >
                    {post.title}
                  </Link>
                </p>
                </div>

                )
            }
          })    
        }
      </div>
    </div>
  )
}

export default Profile;