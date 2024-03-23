import React from 'react';

import { useClickOutside } from '../../hooks/index';
import closeIcon from '../../assets/icons/close.svg';
import logoSvg from '../../assets/images/Logotype.svg';
import './style.css';

export default function MobileMenu({ open, setOpen }) {
  const closeHandler = () => setOpen(false);

  const { ref: dropdownRef } = useClickOutside(() => setOpen(false));

  return (
    <div className={open ? 'mobile_menu' : ""}>
      <div ref={dropdownRef} className='mobile_menu_overlay'>
        <div className="mobile_menu_container">
          <div className="mobile_menu_main">
            <div className='moblie_menu_top'>
              <div className='mobile_menu_top_logo'>
                <img className='logo' src={logoSvg} alt="logo" />
              </div>
              <div onClick={closeHandler} className="mobile_menu_close ">
                <img src={closeIcon} alt="close" height="18px" width="18px" />
              </div>
            </div>
            <ul>
              <li className='mobile_menu_item'>
                <a href="#demos">Demos<span className='icon-arrow'></span></a>
              </li>
              <li className='mobile_menu_item'>
                <a href="#post">Post<span className='icon-arrow'></span></a>
              </li>
              <li className='mobile_menu_item'>
                <a href="#features">Features<span className='icon-arrow'></span></a>
              </li>
              <li className='mobile_menu_item'>
                <a href="#categories">Categories<span className='icon-arrow'></span></a>
              </li>
              <li className='mobile_menu_item'>
                <a href="#shop">Shop<span className='icon-arrow'></span></a>
              </li>
              <li className='mobile_menu_item'>
                <a href="#buyNow">Buy now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}