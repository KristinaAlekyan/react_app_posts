import React from 'react';

import { useClickOutside } from '../../hooks/index';
import './style.css';

export default function Popup({ closePopup, selectedPost }) {
  const closeHandler = () => closePopup(false);

  const { ref: dropdownRef } = useClickOutside(() => closePopup(false));

  return (
    <div className='popup_overlay'>
      <div className='popup_container' ref={dropdownRef}>
        <div className='popup_close' onClick={closeHandler}>Close</div>
        <div className='popup_content' >
          <div className='popup_content_image'>
            <img src={selectedPost.img} alt="img" />
          </div>
          <div className='popup_info'>
            <h2 className='popup_info_title'>{selectedPost.title}</h2>
            <a className='popup_info_tag' href='#a'>{selectedPost.tags} </a>
            <div className='popup_about'>
              <p className='popup_about_author'>{selectedPost.autor}</p>
              <p className='popup_about_date'>{selectedPost.date}</p>
              <p className='popup_about_views'>{selectedPost.views}</p>
            </div>
            <p className='popup_description'>{selectedPost.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}