import React from 'react';
import './Nav.css';
import NavNotice from './NavNotice.jsx';
import NavMessage from './NavMessage.jsx';
import NavAvatar from './NavAvatar.jsx';
function Nav() {
  return (
    <nav className = "header-nav ms-auto">
        <ul className = "d-flex allign-items-center">
            <NavNotice/>
            <NavMessage/>
            <NavAvatar/>
        </ul>
    </nav>
  )
}

export default Nav
