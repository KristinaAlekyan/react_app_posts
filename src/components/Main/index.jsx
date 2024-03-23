import React from 'react';

import Post from '../Post';
import './style.css';

export default function Main({ filteredPosts, handlePostClick }) {
  return (
    <div className='main'>
      {filteredPosts.length > 0 ? (
        <div className='posts-container'>
          {filteredPosts.map((post, index) => (
            <Post
              handlePostClick={handlePostClick}
              post={post}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div>Something were wrong.</div>
      )}
    </div>
  )
}
