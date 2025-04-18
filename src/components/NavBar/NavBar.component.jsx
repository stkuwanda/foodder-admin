import { assets } from '../../assets/assets';
import './NavBar.component.css';

import React from 'react'

function NavBar() {
  return (
    <nav>
      <img className='logo' src={assets.logo} alt="Image of logo" />
      <img className='profile' src={assets.profile_image} alt="Profile image" />
    </nav>
  )
}

export default NavBar;
