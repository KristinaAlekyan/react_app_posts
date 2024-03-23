import { useEffect, useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Popup from './components/Popup';
import './App.css';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [postsData, setPostsData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    const filtered = postsData.filter((post) => {
      const value = inputValue.toLowerCase();
      return (
        post.title.toLowerCase().includes(value) ||
        post.text.toLowerCase().includes(value)
      );
    });

    setFilteredPosts(filtered);
  }, [inputValue, postsData])

  useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then(response => response.json())
      .then(json => {
        setPostsData(json);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const handleSearchValue = (value) => {
    setInputValue(value);
  }

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <Header
        handleSearchValue={handleSearchValue}
        isOpenMobileMenu={isOpenMobileMenu}
        setIsOpenMobileMenu={setIsOpenMobileMenu}
      />
      <Main
        filteredPosts={filteredPosts}
        handlePostClick={handlePostClick}
      />
      {selectedPost && <Popup selectedPost={selectedPost} closePopup={closePopup} />}
    </div>
  );
}
