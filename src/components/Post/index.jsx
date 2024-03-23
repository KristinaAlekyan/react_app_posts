import React from 'react';

import './style.css';

export default function Post({ handlePostClick, post }) {
  return (
    <div className='post' onClick={() => handlePostClick(post)}>
      <img src={post.img} srcSet={`${post.img_2x} 2x`} alt="postImage" />
      <p className='post_tags'>{post.tags}</p>
      <h3 className='post_title'>{post.title}</h3>
      <div className='post_info'>
        <p className='post_author'>{post.autor}</p>
        <p className='post_date'>{post.date}</p>
        <p className='post_views'>{post.views}</p>
      </div>
      <p className='post_description'>{post.text}</p>
    </div>
  )
}
