import React, { useState, useRef, useEffect } from 'react';

import MobileMenu from '../MobileMenu';
import logoSvg from '../../assets/images/Logotype.svg';
import searchSvg from '../../assets/icons/search.svg';
import bugerSvg from '../../assets/icons/burger.svg';
import './style.css';

export default function Header({ handleSearchValue, isOpenMobileMenu, setIsOpenMobileMenu }) {
  const [searchText, setSearchText] = useState(false);
  const inputRef = useRef(null);

  const toggleSearchBar = function () {
    setSearchText(!searchText);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    handleSearchValue(value);
  };

  useEffect(() => {
    if (searchText && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchText]);

  return (
    <>
      <div className='topHeader'>
        {isOpenMobileMenu && <MobileMenu open={isOpenMobileMenu} setOpen={setIsOpenMobileMenu} />}
        <div className='mobileBurgerMenu'>
          <img src={bugerSvg} alt="burgermenu" width={25} height={16} onClick={() => setIsOpenMobileMenu(true)} />
        </div>
        <a href="#home">
          <img className='logo' src={logoSvg} alt="logo" />
        </a>
        <div className='search-container'>
          {
            searchText && (
              <input
                ref={inputRef}
                type="text"
                placeholder='Search'
                onChange={handleInputChange}
              />
            )
          }

          <span onClick={(() => {
            toggleSearchBar();
            handleSearchValue("")
          })} className='searhSvg'>
            <img src={searchSvg} alt="search" width={16} height={16} />
          </span>
        </div>
      </div>
      <div className='stickyHeader'>
        <ul className="menu">
          <li className='menu_item'>
            <a href="#demos">Demos<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post header</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#sharebuttons">Share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#gallerypost">Gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#videopost">Video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu_item'>
            <a href="#post">Post<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post header</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#sharebuttons">Share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#gallerypost">Gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#videopost">Video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu_item'>
            <a href="#features">Features<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post header</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#sharebuttons">Share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#gallerypost">Gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#videopost">Video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu_item'>
            <a href="#categories">Categories<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post header</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#sharebuttons">Share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#gallerypost">Gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#videopost">Video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu_item'>
            <a href="#shop">Shop<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post header</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#postlayout">Post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#sharebuttons">Share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#gallerypost">Gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu_item'><a className='submenu_link' href="#videopost">Video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu_item'>
            <a href="#buyNow">Buy now</a>
          </li>
        </ul>
      </div>
    </>
  )
}